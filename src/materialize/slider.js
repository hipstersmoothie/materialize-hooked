import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Slider } from 'materialize-css';

export const useSlider = (ref, options) => {
  useEffect(() => {
    Slider.init(ref.current, options);
  });
};

export const SliderImage = ({ src, captionClass, caption }) => (
  <li>
    <img src={src} />
    <div className={`caption ${captionClass}`}>{caption}</div>
  </li>
);

SliderImage.propTypes = {
  src: PropTypes.string.isRequired,
  captionClass: PropTypes.string,
  caption: PropTypes.string
};

SliderImage.defaultProps = {
  captionClass: '',
  caption: ''
};

const SliderComponent = ({ children, className, isFullscreen, ...options }) => {
  const slider = useRef();
  useSlider(slider, options);
  const sliderClass = makeClass({
    slider: true,
    [className]: className,
    fullscreen: isFullscreen
  });

  return (
    <div ref={slider} className={sliderClass}>
      <ul className="slides">{children}</ul>
    </div>
  );
};

SliderComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFullscreen: PropTypes.bool,
  indicators: PropTypes.bool,
  height: PropTypes.number,
  duration: PropTypes.number,
  interval: PropTypes.number
};

SliderComponent.defaultProps = {
  className: '',
  isFullscreen: false,
  indicators: true,
  height: 400,
  duration: 500,
  interval: 6000
};

export default SliderComponent;
