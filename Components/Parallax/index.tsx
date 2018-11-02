import * as React from 'react';
import makeClass from 'classnames';
import { Parallax, ParallaxOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export const useParallax = (
  ref: React.RefObject<HTMLDivElement>,
  options: ParallaxOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Parallax.init(ref.current, options);
    }
  });
};

export interface ParallaxProps extends Partial<ParallaxOptions> {
  /** Image to use in the parallax effect */
  src: string;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** Height of the parallax image */
  height?: number;
  /** Content of the parallax section */
  children?: React.ReactNode;
}

export const ParallaxComponent: React.SFC<ParallaxProps> = ({
  className,
  src,
  height,
  children,
  ...options
}) => {
  const parallax = useRef<HTMLDivElement>();
  useParallax(parallax, options as ParallaxOptions);
  const parallaxClass = makeClass(className, {
    'parallax-container': true
  });

  return (
    <div ref={parallax} className={parallaxClass} style={{ height }}>
      <div className="parallax">
        <img src={src} alt="" />
      </div>
      {children && <div style={{ height: '100%' }}>{children}</div>}
    </div>
  );
};

ParallaxComponent.defaultProps = {
  className: undefined,
  height: 500
};

export default ParallaxComponent;
