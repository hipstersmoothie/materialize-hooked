import React, { useEffect, useRef } from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import { Carousel } from 'materialize-css';

export const useCarousel = (ref, options) => {
  useEffect(() => {
    Carousel.init(ref.current, options);
  });
};

const CarouselComponent = ({
  className,
  images,
  isSlider,
  isCentered,
  children,
  ...options
}) => {
  const carousel = useRef();
  useCarousel(carousel, {
    ...options,
    fullWidth: options.fullWidth || isSlider
  });
  const carouselClass = makeClass({
    carousel: true,
    [className]: className,
    'carousel-slider': isSlider,
    center: isCentered
  });

  return (
    <div ref={carousel} className={carouselClass}>
      {images &&
        images.map(image => (
          <a key={image} className="carousel-item">
            <img src={image} />
          </a>
        ))}
      {children}
    </div>
  );
};

CarouselComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isSlider: PropTypes.bool,
  isCentered: PropTypes.bool,
  duration: PropTypes.number,
  dist: PropTypes.number,
  shift: PropTypes.number,
  padding: PropTypes.number,
  numVisible: PropTypes.number,
  fullWidth: PropTypes.bool,
  indicators: PropTypes.bool,
  noWrap: PropTypes.bool,
  onCycleTo: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.string)
};

CarouselComponent.defaultProps = {
  className: '',
  children: undefined,
  images: undefined,
  isSlider: false,
  isCentered: false,
  duration: 200,
  dist: -100,
  shift: 0,
  padding: 0,
  numVisible: 5,
  fullWidth: false,
  indicators: false,
  noWrap: false,
  onCycleTo: () => undefined
};

export default CarouselComponent;
