import * as React from 'react';
import makeClass from 'classnames';
import { Carousel, CarouselOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export const useCarousel = (
  ref: React.RefObject<HTMLDivElement>,
  options: CarouselOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Carousel.init(ref.current, options);
    }
  });
};

export interface CarouselProps extends Partial<CarouselOptions> {
  className?: string;
  children?: React.ReactNode;
  isSlider?: boolean;
  isCentered?: boolean;
  images?: string[];
}

export const CarouselComponent: React.SFC<CarouselProps> = ({
  className,
  images,
  isSlider,
  isCentered,
  children,
  ...options
}) => {
  const carousel = useRef<HTMLDivElement>();
  useCarousel(carousel, {
    ...options,
    fullWidth: options.fullWidth || isSlider || false
  } as CarouselOptions);
  const carouselClass = makeClass(className, {
    carousel: true,
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
