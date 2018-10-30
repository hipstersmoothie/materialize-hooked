import React, { useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'materialize-css';

export const useDropdown = (ref, options) => {
  useEffect(() => {
    const dropdown = Dropdown.init(ref.current, options);

    if (options.open) {
      dropdown.open();
    }
  });
};

export const DropdownItem = ({ children, onClick }) => (
  <li>
    <a onClick={onClick}>{children}</a>
  </li>
);

DropdownItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

DropdownItem.defaultProps = {
  onClick: () => false
};

export const Divider = () => <li className="divider" tabIndex="-1" />;

const DropdownComponent = ({ className, text, children, ...options }) => {
  const dropdown = useRef();
  useDropdown(dropdown, options);

  return (
    <Fragment>
      <a
        ref={dropdown}
        className={`dropdown-trigger btn ${className}`}
        href="#"
        data-target="dropdown1"
      >
        {text}
      </a>

      <ul id="dropdown1" className="dropdown-content">
        {children}
      </ul>
    </Fragment>
  );
};

DropdownComponent.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool,
  autoTrigger: PropTypes.bool,
  constrainWidth: PropTypes.bool,
  coverTrigger: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  hover: PropTypes.bool,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number,
  onOpenStart: PropTypes.func,
  onOpenEnd: PropTypes.func,
  onCloseStart: PropTypes.func,
  onCloseEnd: PropTypes.func
};

DropdownComponent.defaultProps = {
  className: '',
  alignment: 'left',
  autoTrigger: true,
  open: false,
  constrainWidth: true,
  container: null,
  coverTrigger: true,
  closeOnClick: true,
  hover: false,
  inDuration: 150,
  outDuration: 250,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null
};

export default DropdownComponent;
