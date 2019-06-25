import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./SelectList.scss";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CloseIcon from '@material-ui/icons/Close';


const propTypes = {
  /**
   * Specifies button click event
   */
  onClick: PropTypes.func,

  /**
   * List of select options
   */
  options: PropTypes.array,

  /**
   * Specifies the select list with
   */
  selectWidth: PropTypes.string,

  /**
   * Specifies the background color of the select
   */
  bgColor: PropTypes.string,

  /**
   * Specifies the placeholder text
   */
  placeholder: PropTypes.string,

  /**
   * Specifies the dropdown label text
   */
  label: PropTypes.string,

  /**
   * Specifies the dropdown Material UI icon
   */
  icon: PropTypes.object,

  /**
   * Specifies wether the dropdown allows to select multiple options
   */
  isMultiSelect: PropTypes.bool
}

const SelectList = props => {
  const [isOpen, setOpen] = useState(false);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const {
    onClick = () => { },
    className: customClasses = "",
    options,
    selectWidth,
    bgColor,
    icon: Icon,
    placeholder,
    label = "",
    isMultiSelect
  } = props;

  const selectListClasses = cx(
    'rc-select',
    `${isOpen ? "rc-select-list--open" : ""}`
  )

  const handleClick = () => {
    onClick();
    setOpen(!isOpen);
  }

  const handleChange = event => {
    const value = event.target.textContent;
    if (isMultiSelect) {
      if (optionsSelected.includes(value)) {
        const updatedOptions = [...optionsSelected];
        const valueIndex = optionsSelected.indexOf(value);
        updatedOptions.splice(valueIndex, 1);
        setOptionsSelected(updatedOptions)
      } else {
        setOptionsSelected([...optionsSelected, value])
      }
    } else {
      setOptionsSelected([value]);
      setOpen(!isOpen);
    }
  }

  const renderSelected = () => {
    if (isMultiSelect) {
      return optionsSelected.map(option => <div>{option} <CloseIcon /></div>)
    } else {
      return optionsSelected[0]
    }
  }

  const renderOptions = () => {
    if (isMultiSelect) {
      return options.map(item => (
        <li
          style={{ borderBottom: `1px solid ${bgColor}` }}
          className="rc-select-list__option"
          key={item.value}
          value={item.value}
          onClick={handleChange}>
          {optionsSelected.includes(item.value)
            ? <CheckBoxIcon />
            : <CheckBoxOutlineBlankIcon />
          }
          {item.value}
        </li>)
      )
    } else {
      return options.map(item => (
        <li
          style={{ borderBottom: `1px solid ${bgColor}` }}
          className="rc-select-list__option"
          key={item.value}
          value={item.value}
          onClick={handleChange}>
          {item.value}
        </li>)
      )
    }
  }

  return (
    <div
      className={`${selectListClasses} ${customClasses}`}
      style={{ width: selectWidth }}>
      {label ? (<label className="rc-select__label">{label}</label>) : null}
      <div
        className="rc-select-list"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}>
        {optionsSelected.length > 0
          ? renderSelected()
          : placeholder}
        <div className="rc-select-list__icon">{<Icon />}</div>
      </div>
      <ul
        className="rc-select-list__options"
        style={{ border: `1px solid ${bgColor}` }}>
        {renderOptions()}
      </ul>
    </div>
  )
}

SelectList.propTypes = propTypes;

export default SelectList;
