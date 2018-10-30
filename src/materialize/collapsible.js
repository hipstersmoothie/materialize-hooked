import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Collapsible } from 'materialize-css';

export const useCollapsible = (ref, options) => {
  useEffect(() => {
    Collapsible.init(ref.current, options);
  });
};

export const CollapsibleItem = ({ header, children, isActive }) => (
  <li className={isActive ? 'active' : ''}>
    <div className="collapsible-header">{header}</div>
    <div className="collapsible-body">{children}</div>
  </li>
);

CollapsibleItem.propTypes = {
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired
};

CollapsibleItem.defaultProps = {
  isActive: false
};

const CollapsibleComponent = ({ children, isPopout, ...options }) => {
  const collapsible = useRef();
  useCollapsible(collapsible, options);
  const collapsibleClass = makeClass({
    collapsible: true,
    popout: isPopout
  });

  return (
    <ul ref={collapsible} className={collapsibleClass}>
      {children}
    </ul>
  );
};

CollapsibleComponent.propTypes = {
  children: PropTypes.node.isRequired,
  accordion: PropTypes.bool,
  open: PropTypes.bool,
  isPopout: PropTypes.bool,
  onOpenStart: PropTypes.func,
  onOpenEnd: PropTypes.func,
  onCloseStart: PropTypes.func,
  onCloseEnd: PropTypes.func,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number
};

CollapsibleComponent.defaultProps = {
  accordion: true,
  open: undefined,
  isPopout: true,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null,
  inDuration: 300,
  outDuration: 300
};

export default CollapsibleComponent;
