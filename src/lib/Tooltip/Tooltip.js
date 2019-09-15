import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import './Tooltip.scss';

const propTypes = {
  /**
   * Element that will trigger the tooltip
   */
  trigger: PropTypes.any,

  /**
   * Tooltip placement
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
   * Tooltip type.
   * Each type has different assiciated styles
   * * @type `text` => text has a dashed underline
   */
  type: PropTypes.string
};

const Tooltip = props => {
  const [isHovered, setIsHovered] = useState(false);
  const { trigger, type, children, placement = 'right', width } = props;

  const onShowTooltip = () => {
    setIsHovered(true);
  };

  const onHideTooltip = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="rc-tooltip__wrapper"
      onMouseEnter={onShowTooltip}
      onMouseLeave={onHideTooltip}
    >
      <Manager>
        <Reference>
          {({ ref }) => {
            return (
              <div
                className={`rc-tooltip__trigger rc-tooltip__type--${type}`}
                ref={ref}
              >
                {trigger}
              </div>
            );
          }}
        </Reference>
        {isHovered && (
          <TooltipContent type={type} placement={placement} width={width}>
            {children}
          </TooltipContent>
        )}
      </Manager>
    </div>
  );
};

const TooltipContent = ({ placement, width, type, children }) => (
  <TooltipContentPortal>
    <Popper placement={placement}>
      {({ placement, ref, style, arrowProps }) => {
        console.log('arrowProps', arrowProps);
        return (
          <div
            ref={ref}
            style={{ ...style, width }}
            className={`rc-tooltip rc-tooltip__${type}`}
            data-placement={placement}
          >
            {children}
            <div
              ref={arrowProps.ref}
              style={arrowProps.style}
              className="rc-tooltip__arrow"
            />
          </div>
        );
      }}
    </Popper>
  </TooltipContentPortal>
);

const TooltipContentPortal = ({ children }) => {
  const tooltipContentWrapper = document.createElement('div');
  tooltipContentWrapper.classList.add('rc-tooltip__content-wrapper');

  useEffect(() => {
    document.body.appendChild(tooltipContentWrapper);
    return () => {
      document.body.removeChild(tooltipContentWrapper);
    };
  }, [tooltipContentWrapper]);

  return ReactDOM.createPortal(children, tooltipContentWrapper);
};

Tooltip.propTypes = propTypes;
export default Tooltip;
