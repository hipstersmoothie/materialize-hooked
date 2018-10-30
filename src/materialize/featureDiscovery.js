import React, { useEffect, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TapTarget } from 'materialize-css';

export const useFeatureDiscovery = (ref, options) => {
  const [tapTarget, setTapTarget] = useState();

  useEffect(() => {
    if (!tapTarget) {
      const target = TapTarget.init(ref.current, options);
      setTapTarget(target);
    }
  });

  return () => {
    tapTarget.open();
  };
};

const FeatureDiscovery = forwardRef(({ children, target }, ref) => (
  <div ref={ref} className="tap-target" data-target={target}>
    {children}
  </div>
));

FeatureDiscovery.propTypes = {
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FeatureDiscovery;
