import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./Dropdown.scss";


const propTypes = {
  /**
   * Specifies button click event
   */
  onClick: PropTypes.func,

  items: PropTypes.array
}

const Dropdown = props => {
  const {
    onClick = () => { },
    className: customClasses = "",
    items
  } = props;

  const dropdownClasses = cx(
    'rc-dropdown'
  )

  const handleClick = () => {
    onClick();
  }

  return (
    <div class={`${dropdownClasses} ${customClasses}`}>
      <select>
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
