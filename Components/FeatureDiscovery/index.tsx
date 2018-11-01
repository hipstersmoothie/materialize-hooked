import * as React from 'react';
import { TapTarget, TapTargetOptions } from 'materialize-css';

const { useEffect, useState, forwardRef } = React;

export const useFeatureDiscovery = (
  ref: React.RefObject<HTMLDivElement>,
  options?: TapTargetOptions
) => {
  const [tapTarget, setTapTarget] = useState();

  useEffect(() => {
    if (!tapTarget && ref.current) {
      const target = TapTarget.init(ref.current, options);
      console.log({ target });
      setTapTarget(target);
    }
  });

  return () => {
    tapTarget.open();
  };
};

export interface FeatureDiscoveryProps {
  target: string;
  children: React.ReactNode;
}

const FeatureDiscovery: React.SFC<FeatureDiscoveryProps> = (
  { children, target },
  ref: React.RefObject<HTMLDivElement>
) => (
  <div ref={ref} className="tap-target" data-target={target}>
    {children}
  </div>
);

export default forwardRef(FeatureDiscovery);
