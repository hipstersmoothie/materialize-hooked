import { TapTarget, TapTargetOptions } from 'materialize-css';
import * as React from 'react';

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
  const currentRef = !ref.hasOwnProperty('current') ? React.createRef() : ref;

  return (
    <div ref={currentRef} className="tap-target" data-target={target}>
      {children}
    </div>
  );
};

export default forwardRef(FeatureDiscovery);
