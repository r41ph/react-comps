import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * Specifies the icon Material UI to be used
   */
  icon: PropTypes.string.isRequired
}

const ButtonIcon = props => {
  const { icon: Icon } = props;
  return (
    <span className="rc-button-with-icon__icon">
      <Icon />
    </span>
  )

}

ButtonIcon.propTypes = propTypes;

export default ButtonIcon;
