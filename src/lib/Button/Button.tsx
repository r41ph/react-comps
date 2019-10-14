import React, { FC } from 'react';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';
import './Button.scss';

interface IProps {
  /**
   * Specifies button click event
   */
  onClick: () => void;

  /**
   * Set button text
   */
  children: string;

  /**
   * Set custom classes
   */
  className: string;

  /**
   * Sets component as an anchor link and its reference
   */
  href: string;

  /**
   * Specifies a size.
   *
   * @type ('sm'|'md'|'lg'|'full-width')
   */
  size: string;

  /**
   * Specifies the Material UI icon to use
   *
   */
  icon: object;

  /**
   * Specifies the aria-label text
   *
   */
  'aria-label': string;

  /**
   * Specifies the icon size in pixels.
   */
  iconSize: number;
}

const Button: FC<IProps> = props => {
  const {
    children,
    size = 'md',
    onClick = () => {},
    href,
    icon = null,
    className: customClasses = '',
    iconSize
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
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
      onKeyDown={() => handleKeyDown}
      className={`${buttonClasses} ${customClasses}`}
    >
      {children}
      {icon && <ButtonIcon icon={icon} iconSize={iconSize} />}
    </TagType>
  );
};

export default Button;
