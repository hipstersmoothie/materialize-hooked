import { ScrollSpy, ScrollSpyOptions } from 'materialize-css';
import * as React from 'react';

const { useEffect } = React;

export const useScrollSpy = (options: ScrollSpyOptions) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.scrollspy');
    ScrollSpy.init(elems, options);
  });
};

export interface ScrollSpyProps extends Partial<ScrollSpyOptions> {
  /** Elements to spy on */
  children: React.ReactNode;
}

export const ScrollSpyComponent: React.SFC<ScrollSpyProps> = ({
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

export default ScrollSpyComponent;
