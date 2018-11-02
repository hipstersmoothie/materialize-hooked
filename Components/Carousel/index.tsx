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
  /** A className to attach to the root component */
  className?: string;
  /** Items in carousel to display */
  children?: React.ReactNode;
  /** Display the carousel as a slider */
  isSlider?: boolean;
  /** Center the carousel content */
  isCentered?: boolean;
  /** Images for the carousel to display */
  images?: (string | [string, string])[];
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

  let data: string[][] = [];

  if (images) {
    data = images.map(
      (image, index) =>
        Array.isArray(image) ? image : [image, `Carousel Image ${index}`]
    );
  }

  return (
    <div ref={carousel} className={carouselClass}>
      {data &&
        data.map(([image, alt]) => (
          <a key={image} className="carousel-item">
            <img src={image} alt="" />
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
  isCentered: false
};

// For storybook
export const CarouselWrapper: React.SFC<CarouselProps> = props => (
  <div>
    <CarouselComponent {...props} />
  </div>
);

export default CarouselComponent;
