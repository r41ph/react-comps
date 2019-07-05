import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';
import './Button.scss';

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
   * Set custom classes
   */
  className: PropTypes.string,

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
  icon: PropTypes.string,

  /**
   * Specifies the aria-label text
   *
   */
  'aria-label': PropTypes.string
};

const Button = props => {
  const {
    children,
    size = 'md',
    onClick = () => {},
    href,
    icon = null,
    className: customClasses = ''
  } = props;

  const buttonClasses = cx(
    'rc-button',
    `rc-button-${size}`,
    `${href ? 'rc-button-anchor' : ''}`,
    `${icon && children ? 'rc-button-with-icon' : ''}`,
    `${!children ? 'rc-button-just-icon' : ''}`
  );

  const TagType = href ? 'a' : 'button';

  const handleClick = () => {
    onClick();
  };

  const handleKeyDown = event => {
    if (
      event.key === ' ' ||
      event.key === 'Enter' ||
      event.key === 'Spacebar' // "Spacebar" for IE11 support
    ) {
      // Stop scrolling when space is pressed
      event.preventDefault();
      onClick();
    }
  };

  return (
    <TagType
      {...props}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${buttonClasses} ${customClasses}`}
    >
      {children}
      {icon && <ButtonIcon icon={icon} />}
    </TagType>
  );
};

Button.propTypes = propTypes;

export default Button;
