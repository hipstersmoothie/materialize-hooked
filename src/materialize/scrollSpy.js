import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollSpy } from 'materialize-css';

export const useScrollSpy = options => {
  useEffect(() => {
    const elems = document.querySelectorAll('.scrollspy');
    ScrollSpy.init(elems, options);
  });
};

const ScrollSpyComponent = ({ children, ...options }) => {
  // Errors if you pass in nothing for getActiveElement
  if (!options.getActiveElement) {
    delete options.getActiveElement;
  }

  useScrollSpy(options);

  return <React.Fragment>{children}</React.Fragment>;
};

ScrollSpyComponent.propTypes = {
  children: PropTypes.node.isRequired,
  throttle: PropTypes.number,
  scrollOffset: PropTypes.number,
  activeClass: PropTypes.string,
  getActiveElement: PropTypes.func
};

ScrollSpyComponent.defaultProps = {
  throttle: 100,
  scrollOffset: 200,
  activeClass: 'active',
  getActiveElement: undefined
};

export default ScrollSpyComponent;
