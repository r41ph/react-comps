import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Tooltip.scss';

const propTypes = {
  /**
   * Element that will trigger the tooltip
   */
  trigger: PropTypes.any,

  /**
   * Tooltip position relative to the trigger
   */
  position: PropTypes.string,

  /**
   * Specifies the content to show in the tooltip
   */
  children: PropTypes.any,

  /**
   * Tooltip type
   * * @type ('basic'|'bubble')
   */
  type: PropTypes.string
};

const TooltipContent = props => {
  const { type, children, position, width, styles } = props;
  const tooltipStyle = {
    width: width ? width : 'auto',
    ...styles
  };
  const tooltipContentWrapper = document.createElement('div');

  useEffect(() => {
    tooltipContentWrapper.classList.add('rc-tooltip__content-wrapper');
    document.body.appendChild(tooltipContentWrapper);
    return () => {
      document.body.removeChild(tooltipContentWrapper);
    };
  }, [tooltipContentWrapper]);

  const renderTooltipContent = (tooltipStyle, children) => {
    return (
      <div
        style={tooltipStyle}
        className={`rc-tooltip rc-tooltip-${position} rc-tooltip-${type}`}
      >
        {children}
      </div>
    );
  };

  return ReactDOM.createPortal(
    renderTooltipContent(tooltipStyle, children),
    tooltipContentWrapper
  );
};

const Tooltip = props => {
  const [visible, setVisible] = useState(false);
  const [styles, setStyles] = useState({});
  const {
    trigger,
    type = 'basic',
    children,
    position = 'right',
    width
  } = props;

  const onShowTooltip = triggerEl => {
    const triggerProperties = triggerEl.target.getBoundingClientRect();
    setVisible(true);
    setStyles({
      position: 'fixed',
      left: triggerProperties.width + 20,
      top: triggerProperties.top + triggerProperties.height / 2
    });
  };

  const onHideTooltip = () => {
    setVisible(false);
  };

  return (
    <div
      className="rc-tooltip__wrapper"
      onMouseEnter={triggerEl => onShowTooltip(triggerEl)}
      onMouseLeave={() => onHideTooltip(false)}
    >
      <div className="rc-tooltip__trigger" ref={triggerEl => triggerEl}>
        {trigger}
      </div>
      {visible && (
        <TooltipContent
          type={type}
          position={position}
          width={width}
          styles={styles}
        >
          {children}
        </TooltipContent>
      )}
    </div>
  );
};

Tooltip.propTypes = propTypes;
export default Tooltip;
