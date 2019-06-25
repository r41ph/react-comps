import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./SelectList.scss";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Close';


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

  const onToggleSelect = () => {
    onClick();
    setOpen(!isOpen);
  }

  const onHandleSelectOption = event => {
    const { value } = event.currentTarget.dataset;
    if (isMultiSelect) {
      if (optionsSelected.includes(value)) {
        const updatedOptions = [...optionsSelected];
        const optionIndex = optionsSelected.indexOf(value);
        updatedOptions.splice(optionIndex, 1);
        setOptionsSelected(updatedOptions)
      } else {
        setOptionsSelected([...optionsSelected, value])
      }
    } else {
      setOptionsSelected([value]);
      setOpen(!isOpen);
    }
  }

  const deselectOption = (event, option) => {
    event.stopPropagation();
    const updatedOptions = [...optionsSelected];
    const optionIndex = optionsSelected.indexOf(option);
    updatedOptions.splice(optionIndex, 1);
    setOptionsSelected(updatedOptions)
  }

  const renderSelected = () => {
    if (isMultiSelect) {
      return optionsSelected.map(option => (
        <div onClick={event => deselectOption(event, option)}>
          {option} <DeleteIcon />
        </div>)
      )
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
          data-value={item.value}
          onClick={onHandleSelectOption}>
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
          data-value={item.value}
          onClick={onHandleSelectOption}>
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
        onClick={onToggleSelect}>
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