import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Parallax } from 'materialize-css';

export const useParallax = (ref, options) => {
  useEffect(() => {
    Parallax.init(ref.current, options);
  });
};

const ParallaxComponent = ({ className, src, height, ...options }) => {
  const parallax = useRef();
  useParallax(parallax, options);
  const parallaxClass = makeClass({
    'parallax-container': true,
    [className]: className
  });

  return (
    <div ref={parallax} className={parallaxClass} style={{ height }}>
      <div className="parallax">
        <img src={src} />
      </div>
    </div>
  );
};

ParallaxComponent.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  responsiveThreshold: PropTypes.number
};

ParallaxComponent.defaultProps = {
  className: undefined,
  height: 500,
  responsiveThreshold: 0
};

export default ParallaxComponent;
