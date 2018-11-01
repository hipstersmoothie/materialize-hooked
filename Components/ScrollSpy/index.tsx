import React, { useEffect } from 'react';
import { ScrollSpy, ScrollSpyOptions } from 'materialize-css';

export const useScrollSpy = (options: ScrollSpyOptions) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.scrollspy');
    ScrollSpy.init(elems, options);
  });
};

export interface ScrollSpyProps extends Partial<ScrollSpyOptions> {
  children: React.ReactNode;
}

const ScrollSpyComponent: React.SFC<ScrollSpyProps> = ({
  children,
  ...options
}) => {
  // Errors if you pass in nothing for getActiveElement
  if (!options.getActiveElement) {
    delete options.getActiveElement;
  }

  useScrollSpy(options as ScrollSpyOptions);

  return <>{children}</>;
};

ScrollSpyComponent.defaultProps = {
  throttle: 100,
  scrollOffset: 200,
  activeClass: 'active',
  getActiveElement: undefined
};

export default ScrollSpyComponent;
