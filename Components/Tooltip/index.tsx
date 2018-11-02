import * as React from 'react';
import makeClass from 'classnames';
import { Tooltip, TooltipOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export interface TooltipProps extends TooltipOptions {
  /** Content of tooltip */
  children: React.ReactNode | string;
  /** Content of tooltip */
  text: string;
  /**
   * A className to attach to the root component
   * @default
   */
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

export const TooltipComponent: React.SFC<TooltipProps> = ({
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
  className: undefined
};

export default TooltipComponent;
