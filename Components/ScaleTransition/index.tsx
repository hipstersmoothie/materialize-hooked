import * as React from 'react';

const { useEffect, useRef } = React;

export const useScale = (
  ref: React.RefObject<any>,
  scaleIn = true,
  delay = 1000
) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setTimeout(() => {
      if (!ref.current) {
        return;
      }

      ref.current.classList.add(`scale-${scaleIn ? 'in' : 'out'}`);
    }, delay);
  });

  if (scaleIn) {
    return 'scale-transition scale-out';
  }

  return 'scale-transition';
};

export interface ScaleProps {
  /** Scale the element in */
  scaleIn?: boolean;
  /** How long the component should wait until applying the scale effect */
  delay?: number;
  /** The element to apply the scale effect to */
  children: React.ReactNode;
}

export const Scale: React.SFC<ScaleProps> = ({ children, scaleIn, delay }) => {
  const ref = useRef<HTMLSpanElement>();
  const className = useScale(ref, scaleIn, delay);

  return (
    <span style={{ display: 'inline-block' }} ref={ref} className={className}>
      {children}
    </span>
  );
};

Scale.defaultProps = {
  scaleIn: true,
  delay: 1000
};

export default Scale;
