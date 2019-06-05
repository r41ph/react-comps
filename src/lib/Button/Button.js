import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import "./Button.scss";

const propTypes = {
  /**
   * Sets button status
   */
  active: PropTypes.string,

  /**
   * Sets component as an anchor link and its reference
   */
  href: PropTypes.string,

  /**
   * Specifies a size.
   *
   * @type ('sm'|'md'|'lg'|'full-width')
   */
  size: PropTypes.string
}

const Button = props => {
  const {
    children,
    size = "md",
    onClick = () => { }
  } = props;

  const buttonCSS = cx(
    'rc-button',
    `rc-button-${size}`
  )

  const TagType = props.href ? "a" : "button"

  const handleClick = () => {
    onClick();
  }

  return (
    <TagType
      {...props}
      onClick={handleClick}
      className={`${buttonCSS}`}>
      {children}
    </TagType >
  )
}

Button.propTypes = propTypes;

export default Button;
