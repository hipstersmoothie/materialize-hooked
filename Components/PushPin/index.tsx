import makeClass from 'classnames';
import { Pushpin, PushpinOptions } from 'materialize-css';
import * as React from 'react';

const { useEffect, useRef } = React;

export const usePushpin = (
  ref: React.RefObject<HTMLDivElement>,
  options: PushpinOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Pushpin.init(ref.current, options);
    }
  });
};

export interface PushpinProps extends Partial<PushpinOptions> {
  /** The element to pin */
  children: React.ReactNode;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

export const PushpinComponent: React.SFC<PushpinProps> = ({
  children,
  className,
  ...options
}) => {
  const pushPin = useRef<HTMLDivElement>();
  usePushpin(pushPin, options as PushpinOptions);

  const pushPinClass = makeClass(className, {
    pushpin: true
  });

  return (
    <div ref={pushPin} className={pushPinClass}>
      {children}
    </div>
  );
};

PushpinComponent.defaultProps = {
  className: undefined
};

export default PushpinComponent;
