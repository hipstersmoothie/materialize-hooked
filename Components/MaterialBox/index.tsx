import * as React from 'react';
import { Materialbox, MaterialboxOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export const useMaterialBox = (
  ref: React.RefObject<HTMLImageElement>,
  options: MaterialboxOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Materialbox.init(ref.current, options);
    }
  });
};

export interface MaterialBoxProps extends Partial<MaterialboxOptions> {
  /** Image to display */
  src: string;
  /** Width of the image */
  width?: number;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** A caption to reveal below the image */
  caption?: string;
}

const MaterialBox: React.SFC<MaterialBoxProps> = ({
  width,
  src,
  className,
  caption,
  ...options
}) => {
  const materialBox = useRef<HTMLImageElement>();
  useMaterialBox(materialBox, options as MaterialboxOptions);

  return (
    <img
      ref={materialBox}
      className={className}
      width={width}
      src={src}
      data-caption={caption}
    />
  );
};

MaterialBox.defaultProps = {
  className: '',
  width: undefined,
  caption: '',
  inDuration: 275,
  outDuration: 200,
  onOpenStart: undefined,
  onOpenEnd: undefined,
  onCloseStart: undefined,
  onCloseEnd: undefined
};

export default MaterialBox;
