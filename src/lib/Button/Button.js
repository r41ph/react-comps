import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import ButtonIcon from "./ButtonIcon";
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
  size: PropTypes.string,

  /**
   * Specifies the. Material icon to use
   *
   */
  icon: PropTypes.string
}

const Button = props => {
  const {
    children,
    size = "md",
    onClick = () => { },
    href,
    icon = null
  } = props;

  const buttonCSS = cx(
    'rc-button',
    `rc-button-${size}`,
    `${href ? "rc-button-anchor" : ""}`,
    `${icon ? "rc-button-with-icon" : ""}`
  )

  const TagType = href ? "a" : "button";

  const handleClick = () => {
    onClick();
  }

  return (
    <TagType
      {...props}
      onClick={handleClick}
      className={`${buttonCSS}`}>
      {children}
      {icon && <ButtonIcon icon={icon} />}
    </TagType >
  )
}

Button.propTypes = propTypes;

export default Button;
