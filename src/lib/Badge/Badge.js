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
   * Function to trigger in click
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
  title: PropTypes.string,

  /**
   * Specifies custom classes
   */
  customClass: PropTypes.string
};

const Badge = ({
  text,
  bgColor,
  handleOnClick,
  icon,
  title = 'Delete',
  customClass
}) => (
  <div className="rc-badge__wrapper">
    <div
      className={`rc-badge rc-badge-${customClass}`}
      onClick={event => handleOnClick(event, text)}
      title={title}
      style={{ backgroundColor: bgColor }}
    >
      {text} {icon ? icon : <DeleteIcon />}
    </div>
  </div>
);

Badge.propTypes = propTypes;
export default Badge;
