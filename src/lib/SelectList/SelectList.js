import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./SelectList.scss";


const propTypes = {
  /**
   * Specifies button click event
   */
  onClick: PropTypes.func,

  items: PropTypes.array,
  selectWidth: PropTypes.string,
  bgColor: PropTypes.string
}

const SelectList = props => {
  const {
    onClick = () => { },
    className: customClasses = "",
    items,
    selectWidth,
    bgColor
  } = props;

  const selectListClasses = cx(
    'rc-select-list'
  )

  const handleClick = () => {
    onClick();
  }

  return (
    <div class={`${selectListClasses} ${customClasses}`}>
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

SelectList.propTypes = propTypes;

export default SelectList;
