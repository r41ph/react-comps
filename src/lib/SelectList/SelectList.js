import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./SelectList.scss";


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
   * Specifies the dropdown Material UI icon
   */
  icon: PropTypes.object
}

const SelectList = props => {
  const [isOpen, setOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState([]);

  useEffect(function () {
    console.log("optionSelected", optionSelected)
  }, [optionSelected]);

  const {
    onClick = () => { },
    className: customClasses = "",
    options,
    selectWidth,
    bgColor,
    icon: Icon,
    placeholder
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
    console.log("event.target.value", event.target.textContent)
    setOptionSelected([event.target.textContent]);
    // multiple??
    // setOptionSelected([...optionSelected, event.target.textContent]);
    setOpen(!isOpen);
  }

  return (
    <div
      className={`${selectListClasses} ${customClasses}`}
      style={{ width: selectWidth }}>
      <div
        className="rc-select-list"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}>
        {optionSelected.length > 0 ? optionSelected[0] : placeholder}
        <div className="rc-select-list__icon">{<Icon />}</div>
      </div>
      <ul
        className="rc-select-list__options"
        style={{ border: `1px solid ${bgColor}` }}>
        {options.map(item => (
          <li
            style={{ borderBottom: `1px solid ${bgColor}` }}
            className="rc-select-list__option"
            key={item.value}
            value={item.value}
            onClick={handleChange}>
            {item.value}
          </li>)
        )}
      </ul>
    </div>
  )
}

SelectList.propTypes = propTypes;

export default SelectList;
