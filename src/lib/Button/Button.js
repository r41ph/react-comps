import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import ButtonIcon from "./ButtonIcon";
import "./Button.scss";


const propTypes = {
  /**
   * Specifies button click event
   */
  onClick: PropTypes.func,

  /**
   * Set button text
   */
  children: PropTypes.string,

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
   * Specifies the Material UI icon to use
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

  const buttonC = cx(
    'rc-button',
    `rc-button-${size}`,
    `${href ? "rc-button-anchor" : ""}`,
    `${icon && children ? "rc-button-with-icon" : ""}`,
    `${!children ? "rc-button-just-icon" : ""}`
  )

  const TagType = href ? "a" : "button";

  const handleClick = () => {
    onClick();
  }

  return (
    <TagType
      {...props}
      onClick={handleClick}
      className={`${buttonC}`}>
      {children}
      {icon && <ButtonIcon icon={icon} />}
    </TagType >
  )
}

Button.propTypes = propTypes;

export default Button;
