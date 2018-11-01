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
      setTapTarget(target);
    }
  });

  return () => {
    tapTarget.open();
  };
};

export interface FeatureDiscoveryProps {
  /** Element Id to attach the feature discovery to */
  target: string;
  /** Body of the feature discovery */
  children: React.ReactNode;
}

export const FeatureDiscovery: React.SFC<FeatureDiscoveryProps> = (
  { children, target },
  ref
) => {
  // For storybook
  ref = !ref.hasOwnProperty('current') ? React.createRef() : ref;

  return (
    <div ref={ref} className="tap-target" data-target={target}>
      {children}
    </div>
  );
};

export default forwardRef(FeatureDiscovery);
