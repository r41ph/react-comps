import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Tooltip.scss';

const propTypes = {
  /**
   * Element that will trigger the tooltip
   */
  trigger: PropTypes.any,

  /**
   * Tooltip placement relative to the trigger
   */
  placement: PropTypes.string,

  /**
   * Specifies the content to show in the tooltip
   */
  children: PropTypes.any,

  /**
   * Specifies the tooltip width
   * * Accepts px|em|rem => i.e: width="20rem"
   */
  width: PropTypes.string,

  /**
   * Tooltip type
   * * @type ('basic')
   */
  type: PropTypes.string
};

const Tooltip = props => {
  const [isHovered, setIsHovered] = useState(false);
  const [triggerMeasure, setTriggerMeasure] = useState({});
  const {
    trigger,
    type = 'basic',
    children,
    placement = 'right',
    width
  } = props;

  const onShowTooltip = triggerEl => {
    setIsHovered(true);
    setTriggerMeasure(triggerEl.target.getBoundingClientRect());
  };

  const onHideTooltip = () => {
    setIsHovered(false);
    setTriggerMeasure({});
  };

  return (
    <div
      className="rc-tooltip__wrapper"
      onMouseEnter={triggerEl => onShowTooltip(triggerEl)}
      onMouseLeave={() => onHideTooltip()}
    >
      <div className="rc-tooltip__trigger" ref={triggerEl => triggerEl}>
        {trigger}
      </div>
      {isHovered && (
        <TooltipContent
          type={type}
          placement={placement}
          width={width}
          triggerMeasure={triggerMeasure}
        >
          {children}
        </TooltipContent>
      )}
    </div>
  );
};

const TooltipContent = props => {
  const [styles, setStyles] = useState({});
  const tooltipRef = useRef();

  useEffect(() => {
    const { triggerMeasure, width } = props;

    // Set tooltip position
    const tooltipLeft = triggerMeasure.width + 20;
    const tooltipTop = triggerMeasure.top;
    const triggerHeight = triggerMeasure.height;
    const tooltipMeasure = tooltipRef.current.getBoundingClientRect();
    const tooltipHeight = tooltipMeasure.height;

    const tooltipStyle = {
      boxSizing: 'border-box',
      width: width ? width : 'auto',
      position: 'fixed',
      left: tooltipLeft,
      top: tooltipTop + triggerHeight / 2 - tooltipHeight / 2
    };

    if (JSON.stringify(tooltipStyle) !== JSON.stringify(styles)) {
      setStyles(tooltipStyle);
    }
  }, [props, styles]);

  return (
    <TooltipContentPortal>
      <div
        style={styles}
        className={`rc-tooltip rc-tooltip-${props.placement} rc-tooltip-${props.type}`}
        ref={tooltipRef}
      >
        {props.children}
      </div>
    </TooltipContentPortal>
  );
};

const TooltipContentPortal = props => {
  const tooltipContentWrapper = document.createElement('div');
  tooltipContentWrapper.classList.add('rc-tooltip__content-wrapper');

  useEffect(() => {
    document.body.appendChild(tooltipContentWrapper);
    return () => {
      document.body.removeChild(tooltipContentWrapper);
    };
  }, [tooltipContentWrapper]);

  return ReactDOM.createPortal(props.children, tooltipContentWrapper);
};

Tooltip.propTypes = propTypes;
export default Tooltip;
