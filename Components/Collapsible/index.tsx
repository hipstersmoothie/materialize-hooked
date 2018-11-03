import makeClass from 'classnames';
import {
  Collapsible as CollapsibleAnimation,
  CollapsibleOptions
} from 'materialize-css';
import * as React from 'react';

const { useEffect, useRef } = React;

export const useCollapsible = (
  ref: React.RefObject<HTMLUListElement>,
  options: CollapsibleOptions
) => {
  useEffect(() => {
    if (ref.current) {
      CollapsibleAnimation.init(ref.current, options);
    }
  });
};

export interface CollapsibleItemProps {
  /** Title of the collapsible item */
  header: React.ReactNode | string;
  /** Whether the item is open */
  isActive?: boolean;
  /** Item content */
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

export interface CollapsibleProps extends Partial<CollapsibleOptions> {
  /** Collapsible Item children */
  children: React.ReactNode;
  /** A className to attach to the root component */
  className?: string;
  /** Animate the items to pop out when expanding */
  isPopout?: boolean;
}

export const Collapsible: React.SFC<CollapsibleProps> = ({
  children,
  isPopout,
  className,
  ...options
}) => {
  const collapsible = useRef<HTMLUListElement>();
  useCollapsible(collapsible, options as CollapsibleOptions);
  const collapsibleClass = makeClass(className, {
    collapsible: true,
    popout: isPopout,
    expandable: true
  });

  return (
    <ul ref={collapsible} className={collapsibleClass}>
      {children}
    </ul>
  );
};

Collapsible.defaultProps = {
  isPopout: false,
  className: undefined
};

export default Collapsible;
