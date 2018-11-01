import * as React from 'react';
import makeClass from 'classnames';
import { Tooltip, TooltipOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export interface TooltipProps extends TooltipOptions {
  children: React.ReactNode | string;
  text: string;
  className?: string;
}

export const useTooltip = (
  ref: React.RefObject<HTMLAnchorElement>,
  options: TooltipOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Tooltip.init(ref.current, options);
    }
  });
};

const TooltipComponent: React.SFC<TooltipProps> = ({
  children,
  className,
  text,
  ...options
}) => {
  const tooltip = useRef<HTMLAnchorElement>();
  useTooltip(tooltip, options);

  const tooltipClass = makeClass(className, {
    btn: true,
    tooltipped: true
  });

  return (
    <a
      ref={tooltip}
      className={tooltipClass}
      data-position={options.position}
      data-tooltip={text}
    >
      {children}
    </a>
  );
};

TooltipComponent.defaultProps = {
  className: undefined,
  position: 'bottom',
  exitDelay: 0,
  enterDelay: 200,
  html: undefined,
  margin: 5,
  inDuration: 300,
  outDuration: 250,
  transitionMovement: 10
};

export default TooltipComponent;
