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
  bgColor: PropTypes.string,

  /**
   * Specifies the badge icon
   * If non is passed the Material UI X icon
   * would be used by default.
   * Accepts any Material UI icon passed as component.
   */
  icon: PropTypes.object,

  /**
   * Specifies the title when hover the barge
   */
  title: PropTypes.string
};

const Badge = ({
  text,
  bgColor,
  handleOnClick,
  icon: Icon,
  title = 'Delete'
}) => (
  <div className="rc-badge__wrapper">
    <div
      className="rc-badge"
      onClick={event => handleOnClick(event, text)}
      title={title}
      style={{ backgroundColor: bgColor }}
    >
      {text} {Icon ? <Icon /> : <DeleteIcon />}
    </div>
  </div>
);

Badge.propTypes = propTypes;
export default Badge;
