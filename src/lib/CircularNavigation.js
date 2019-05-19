import React, { useState } from "react";
import "./CircularNavigation.scss";

const navItems = [
  {
    icon: "home",
    text: "Home"
  },
  {
    icon: "announcement",
    text: "About"
  },
  {
    icon: "assignment",
    text: "Projects"
  },
  {
    icon: "build",
    text: "Labs"
  },
  {
    icon: "email",
    text: "Contact"
  }
]

const CircularNavigation = ({ overlay = false, overlayColor = "#000" }) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const overlayStyle = {
    backgroundColor: overlayColor,
    display: "block"
  }

  const onClickOverlay = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav id="circular-nav-wrapper"
      className={`circular-nav-wrapper ${isNavOpen ? "circular-nav-open" : ""}`}>
      <div className={`circular-nav-toggle ${isNavOpen ? "circular-nav-open" : ""}`} onClick={onClickOverlay}>
        <i className="material-icons">add</i>
      </div>
      <div className={`circular-nav-panel ${isNavOpen ? "circular-nav-open" : ""}`}></div>
      <ul className={`circular-nav-menu ${isNavOpen ? "circular-nav-open" : ""}`}>
        {navItems.map((item, index) => (
          <li className={`circular-nav-item circular-nav-item-${index + 1}`}>
            <a href="/">
              <i className="material-icons">{item.icon}</i>
              <span>{item.text}</span>
            </a>
          </li>
        ))
        }
      </ul>
      {overlay && <div style={overlayStyle} className='circular-nav-overlay'></div>}
    </nav>
  )
};

export default CircularNavigation;