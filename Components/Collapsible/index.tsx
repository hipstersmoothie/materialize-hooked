import * as React from 'react';
import makeClass from 'classnames';
import { Collapsible, CollapsibleOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export const useCollapsible = (
  ref: React.RefObject<HTMLUListElement>,
  options: CollapsibleOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Collapsible.init(ref.current, options);
    }
  });
};

export interface CollapsibleItemProps {
  header: React.ReactNode | string;
  isActive?: boolean;
  children: React.ReactNode;
}

export const CollapsibleItem: React.SFC<CollapsibleItemProps> = ({
  header,
  children,
  isActive
}) => (
  <li className={isActive ? 'active' : ''}>
    <div className="collapsible-header">{header}</div>
    <div className="collapsible-body">{children}</div>
  </li>
);

CollapsibleItem.defaultProps = {
  isActive: false
};

export interface CollapsibleComponentProps extends Partial<CollapsibleOptions> {
  children: React.ReactNode;
  className?: string;
  isPopout?: boolean;
}

const CollapsibleComponent: React.SFC<CollapsibleComponentProps> = ({
  children,
  isPopout,
  className,
  ...options
}) => {
  const collapsible = useRef<HTMLUListElement>();
  useCollapsible(collapsible, options as CollapsibleOptions);
  const collapsibleClass = makeClass(className, {
    collapsible: true,
    popout: isPopout
  });

  return (
    <ul ref={collapsible} className={collapsibleClass}>
      {children}
    </ul>
  );
};

CollapsibleComponent.defaultProps = {
  isPopout: true,
  className: undefined
};

export default CollapsibleComponent;
