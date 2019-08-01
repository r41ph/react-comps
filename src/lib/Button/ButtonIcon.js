import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Specifies the icon Material UI to be used
   */
  icon: PropTypes.object.isRequired,
  /**
   * Specifies the icon size in pixels.
   */
  iconSize: PropTypes.number
};

const ButtonIcon = props => {
  const { icon: Icon, iconSize } = props;
  return (
    <span className="rc-button-with-icon__icon">
      <Icon style={{ fontSize: iconSize }} />
    </span>
  );
};

ButtonIcon.propTypes = propTypes;

export default ButtonIcon;
