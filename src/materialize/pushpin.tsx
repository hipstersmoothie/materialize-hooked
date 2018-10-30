import * as React from 'react';
import makeClass from 'classnames';
import { Pushpin, PushpinOptions } from 'materialize-css';

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

export interface PushpinProps {
  children: React.ReactNode;
  className?: string;
  top?: number;
  bottom?: number;
  offset?: number;
  onPositionChange?: (
    this: Pushpin,
    position: 'pinned' | 'pin-top' | 'pin-bottom'
  ) => void;
}

const defaultProps = {
  className: undefined,
  top: 0,
  bottom: Infinity,
  offset: 0,
  onPositionChange: () => undefined
};

const PushpinComponent = (props: PushpinProps) => {
  const { children, className, ...options } = { ...defaultProps, ...props };
  const pushPin = useRef();
  usePushpin(pushPin, options);

  const pushPinClass = makeClass(className, {
    pushpin: true
  });

  return (
    <div ref={pushPin} className={pushPinClass}>
      {children}
    </div>
  );
};

export default PushpinComponent;
