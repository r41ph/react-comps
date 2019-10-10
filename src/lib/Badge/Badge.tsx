import React, { FC } from 'react';
import DeleteIcon from '@material-ui/icons/Close';
import './Badge.scss';

interface BadgeProps {
  /**
   * Specifies the text to show in the badge
   */
  text: string;

  /**
   * Function to trigger on click
   */
  handleOnClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    text: string
  ) => void;

  /**
   * Specifies the background color of the badge
   */
  bgColor: string;

  /**
   * Specifies the badge icon
   * If non is passed the Material UI X icon
   * would be used by default.
   * Accepts any Material UI icon passed as component.
   */
  icon: object;

  /**
   * Specifies the title when hover the barge
   */
  title: string;

  /**
   * Specifies custom classes
   */
  customClass: string;
}

const Badge: FC<BadgeProps> = ({
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

export default Badge;
