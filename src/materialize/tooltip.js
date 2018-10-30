import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Tooltip } from 'materialize-css';

export const useTooltip = (ref, options) => {
  useEffect(() => {
    Tooltip.init(ref.current, options);
  });
};

const TooltipComponent = ({
  children,
  className,
  position,
  text,
  ...options
}) => {
  const tooltip = useRef();
  useTooltip(tooltip, options);

  const tooltipClass = makeClass({
    btn: true,
    tooltipped: true,
    [className]: className
  });

  return (
    <a
      ref={tooltip}
      className={tooltipClass}
      data-position={position}
      data-tooltip={text}
    >
      {children}
    </a>
  );
};

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  activeClass: PropTypes.string,
  getActiveElement: PropTypes.func,
  enterDelay: PropTypes.number,
  exitDelay: PropTypes.number,
  html: PropTypes.string,
  margin: PropTypes.number,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number,
  transitionMovement: PropTypes.number
};

TooltipComponent.defaultProps = {
  className: undefined,
  position: 'bottom',
  activeClass: 'active',
  getActiveElement: undefined,
  exitDelay: 0,
  enterDelay: 200,
  html: null,
  margin: 5,
  inDuration: 300,
  outDuration: 250,
  transitionMovement: 10
};

export default TooltipComponent;
