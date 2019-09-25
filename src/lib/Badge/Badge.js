import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Close';
import './Badge.scss';

const propTypes = {
  /**
   * Specifies the text to show in the badge
   */
  text: PropTypes.string,

  /**
   * Function to remove the badge
   */
  handleOnClick: PropTypes.func,

  /**
   * Specifies the background color of the badge
   */
  bgColor: PropTypes.string
};

const Badge = ({ text, bgColor, handleOnClick }) => (
  <div className="rc-badge__wrapper">
    <div
      className="rc-badge"
      onClick={event => handleOnClick(event, text)}
      title="Deletes"
      style={{ backgroundColor: bgColor }}
    >
      {text} <DeleteIcon />
    </div>
  </div>
);

Badge.propTypes = propTypes;
export default Badge;
