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
   * Controls if the text under the icons is visible
   */
  showText: PropTypes.bool,

  /**
   * Controls if the icons are visible
   */
  showIcon: PropTypes.bool
}

const defaultProps = {
  overlay: false,
  overlayColor: "#000",
  showText: false,
  showIcon: true
}


const CircularNavigation = props => {
  const [navOpen, setNavOpen] = useState(false);

  const {
    overlay = false,
    overlayColor = "#000",
    showText = false,
    showIcon = true
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
    "circular-nav-menu__show-icon": showIcon
  })

  const toggle = () => setNavOpen(!navOpen);

  return (
    <nav className={`circular-nav-wrapper ${isNavOpen}`}>
      <div className={`circular-nav-toggle ${isNavOpen}`} onClick={toggle}>
        <i className="material-icons circular-nav-toggle__icon">add</i>
      </div>
      <div className={`circular-nav-bg ${isNavOpen}`}></div>
      <ul className={`circular-nav-menu ${isNavOpen} ${menuClasses}`}>
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
          onClick={toggle}>
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
CircularNavigation.defaultProps = defaultProps;

export default CircularNavigation;
