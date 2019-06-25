import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from '@material-ui/icons/Close';

const propTypes = {
  /**
   * Specifies the text to show in the badge
   */
  option: PropTypes.string,

  /**
   * Function to remove the badge
   */
  deselectOption: PropTypes.func,

  /**
   * Specifies the background color of the badge
   */
  badgeBgColor: PropTypes.string
}

const Badge = ({ option, badgeBgColor, deselectOption }) =>
  <div
    className="rc-select-list__selected-badge"
    onClick={event => deselectOption(event, option)}
    title="Remove"
    style={{ backgroundColor: badgeBgColor }}
  >
    {option} <DeleteIcon />
  </div>

Badge.propTypes = propTypes;
export default Badge;
