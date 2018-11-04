import makeClass from 'classnames';
import { Slider, SliderOptions } from 'materialize-css';
import * as React from 'react';

const { useRef, useEffect } = React;

export const useSlider = (
  ref: React.RefObject<HTMLDivElement>,
  options: SliderOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Slider.init(ref.current, options);
    }
  });
};

export interface SliderImageProps {
  /** The image path/url to display */
  src: string;
  /** The image alt text. Use if you dont have a caption */
  alt: string;
  /**
   * Class name for the caption div
   * @default ''
   */
  captionClass?: string;
  /** Body of the caption for the slider image */
  caption?: React.ReactNode;
}

export const SliderImage: React.SFC<SliderImageProps> = ({
  src,
  captionClass,
  caption,
  alt
}) => (
  <li>
    <img src={src} alt={alt} />
    {caption && <div className={`caption ${captionClass}`}>{caption}</div>}
  </li>
);

SliderImage.defaultProps = {
  captionClass: '',
  caption: undefined,
  alt: ''
};

export interface SliderProps extends Partial<SliderOptions> {
  /** SliderImages to display */
  children: React.ReactNode;
  /**
   * ClassName for the wrapper @default '
   * @default ''
   */
  className?: string;
  /**
   * Whether the slider displays in full-screen mode
   * @default false
   */
  isFullscreen?: boolean;
}

export const SliderComponent: React.SFC<SliderProps> = ({
  children,
  className,
  isFullscreen,
  ...options
}) => {
  const slider = useRef<HTMLDivElement>();
  useSlider(slider, options as SliderOptions);
  const sliderClass = makeClass(className, {
    slider: true,
    fullscreen: isFullscreen
  });

  return (
    <div ref={slider} className={sliderClass}>
      <ul className="slides">{children}</ul>
    </div>
  );
};

SliderComponent.defaultProps = {
  className: '',
  isFullscreen: false
};

export default SliderComponent;
