import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';
import './Tooltip.scss';

type placementOptions =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

interface IProps {
  /**
   * Element that will trigger the tooltip
   */
  trigger: string | React.ComponentType | Function;

  /**
   * Tooltip placement.
   * @default `right`
   */
  placement?: placementOptions;

  /**
   * Specifies the content to show in the tooltip
   */
  children: string | HTMLElement;

  /**
   * Specifies the tooltip width
   * * Accepts px|em|rem => i.e: width="20rem"
   */
  width: string;

  /**
   * Tooltip type.
   * `text` => has a dashed underline
   */
  type: string;

  /**
   * Specifies if the tooltip should open on click event
   */
  triggerOnClick: boolean;
}

interface IPropsTooltipContent {
  /**
   * Tooltip placement.
   * @default `right`
   */
  placement?: placementOptions;

  /**
   * Specifies the content to show in the tooltip
   */
  children: any;

  /**
   * Specifies the tooltip width
   * * Accepts px|em|rem => i.e: width="20rem"
   */
  width: string;

  /**
   * Tooltip type.
   * `text` => has a dashed underline
   */
  type: string;
}

const Tooltip: React.FunctionComponent<IProps> = props => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    trigger,
    type,
    children,
    placement = 'right',
    width,
    triggerOnClick: isTriggerOnClick = false
  } = props;

  const onShowTooltip = () => {
    setIsHovered(true);
  };

  const onHideTooltip = () => {
    setIsHovered(false);
  };

  const onClickTooltip = () => {
    setIsHovered(!isHovered);
  };

  const tooltipListeners = isTriggerOnClick
    ? {
        onClick: onClickTooltip,
        onMouseLeave: onHideTooltip
      }
    : {
        onMouseEnter: onShowTooltip,
        onMouseLeave: onHideTooltip,
        onFocus: onShowTooltip,
        onBlur: onHideTooltip
      };

  return (
    <div className="rc-tooltip__wrapper" {...tooltipListeners}>
      <Manager>
        <Reference>
          {({ ref }) => {
            return (
              <div
                className={`rc-tooltip__trigger rc-tooltip__type--${type} ${
                  isTriggerOnClick ? 'rc-tooltip__trigger--click' : ''
                }`}
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

const TooltipContent: React.FunctionComponent<IPropsTooltipContent> = ({
  placement,
  width,
  type,
  children
}) => (
  <TooltipContentPortal>
    <Popper placement={placement}>
      {({ placement, ref, style, arrowProps }) => {
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

const TooltipContentPortal: React.FunctionComponent = ({ children }) => {
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

export default Tooltip;
