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

export interface ParallaxProps {
  src: string;
  className?: string;
  height?: number;
  responsiveThreshold?: number;
}

export const ParallaxComponent: React.SFC<ParallaxProps> = ({
  className,
  src,
  height,
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
        <img src={src} />
      </div>
    </div>
  );
};

ParallaxComponent.defaultProps = {
  className: undefined,
  height: 500,
  responsiveThreshold: 0
};

export default ParallaxComponent;
