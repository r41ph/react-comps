import React, { useState } from "react";
import cx from 'classnames';
import PropTypes from 'prop-types';
import "./CircularNavigation.scss";

const propTypes = {
  /**
   * Controls if an overlay is shown when the nav is open
   */
  overlay: PropTypes.bool,

  /**
   * Sets the overlay color
   */
  overlayColor: PropTypes.string,

  /**
   * Sets whether click on the overlay should close navigation
   */
  closeOnClickOverlay: PropTypes.bool,

  /**
   * Controls if the text under the icons is visible
   */
  showText: PropTypes.bool,

  /**
   * Controls if the icons are visible
   */
  showIcons: PropTypes.bool
}

const CircularNavigation = props => {
  const [navOpen, setNavOpen] = useState(false);

  const {
    overlay = false,
    overlayColor = "#000",
    showText = false,
    showIcons = true,
    closeOnClickOverlay = false
  } = props;

  const overlayStyle = {
    backgroundColor: overlayColor,
    display: "block"
  }

  const isNavOpen = cx({
    "circular-nav-open": navOpen
  })

  const menuClasses = cx('circular-nav-menu', {
    "circular-nav-menu__show-text": showText,
    "circular-nav-menu__show-icon": showIcons
  })

  const toggle = () => setNavOpen(!navOpen);

  if (!props.children) {
    throw new Error(
      `CircularNavigation component cannot be rendered without CircularNavigation.item component(s) as child(s)`,
    )
  }
  return (
    <nav className={`circular-nav-wrapper ${isNavOpen}`}>
      <div className="circular-nav-toggle" onClick={toggle}>
        <i className="material-icons circular-nav-toggle__icon">add</i>
      </div>
      <div className="circular-nav-bg"></div>
      <ul className={`circular-nav-menu ${menuClasses}`}>
        {React.Children.map(props.children, (child, index) =>
          React.cloneElement(child, {
            index
          })
        )}
      </ul>
      {overlay &&
        <div
          style={navOpen ? overlayStyle : {}}
          className='circular-nav-overlay'
          onClick={closeOnClickOverlay && toggle}>
        </div>}
    </nav>
  )
};

CircularNavigation.item = ({ index, href, icon, children }) => (
  <li key={children} className={`circular-nav-item circular-nav-item-${index + 1}`}>
    <a href={href} className="circular-nav-item__link">
      <i className="material-icons circular-nav-item__icon">{icon}</i>
      <span className="circular-nav-item__text">{children}</span>
    </a>
  </li>
)

CircularNavigation.propTypes = propTypes;

export default CircularNavigation;