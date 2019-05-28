import React, { useState } from "react";
import "./CircularNavigation.scss";

const CircularNavigation = props => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const { overlay = false, overlayColor = "#000" } = props;

  const onClickOverlay = () => setIsNavOpen(!isNavOpen);

  const overlayStyle = {
    backgroundColor: overlayColor,
    display: "block"
  }

  return (
    <nav className={`circular-nav-wrapper ${isNavOpen ? "circular-nav-open" : ""}`}>
      <div className={`circular-nav-toggle ${isNavOpen ? "circular-nav-open" : ""}`} onClick={onClickOverlay}>
        <i className="material-icons">add</i>
      </div>
      <div className={`circular-nav-bg ${isNavOpen ? "circular-nav-open" : ""}`}></div>
      <ul className={`circular-nav-menu ${isNavOpen ? "circular-nav-open" : ""}`}>
        {React.Children.map(props.children, (child, index) =>
          React.cloneElement(child, {
            index
          })
        )}
      </ul>
      {overlay && <div style={isNavOpen ? overlayStyle : {}} className='circular-nav-overlay' onClick={onClickOverlay}></div>}
    </nav>
  )
};

CircularNavigation.item = ({ index, href, icon, children }) => (
  <li key={children} className={`circular-nav-item circular-nav-item-${index + 1}`}>
    <a href={href}>
      <i className="material-icons">{icon}</i>
      <span>{children}</span>
    </a>
  </li>
)

export default CircularNavigation;
