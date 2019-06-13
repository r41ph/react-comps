import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./Dropdown.scss";


const propTypes = {
  /**
   * Specifies button click event
   */
  onClick: PropTypes.func,

  items: PropTypes.array,
  selectWidth: PropTypes.string,
  bgColor: PropTypes.string
}

const Dropdown = props => {
  const {
    onClick = () => { },
    className: customClasses = "",
    items,
    selectWidth,
    bgColor
  } = props;

  const dropdownClasses = cx(
    'rc-dropdown'
  )

  const handleClick = () => {
    onClick();
  }

  return (
    <div class={`${dropdownClasses} ${customClasses}`}>
      <select style={{ width: selectWidth, backgroundColor: bgColor }}>
        {items.map(item => (
          <option
            key={item.value}
            value={item.value}>
            {item.value}
          </option>)
        )}
      </select>
    </div>
  )
}

Dropdown.propTypes = propTypes;

export default Dropdown;
