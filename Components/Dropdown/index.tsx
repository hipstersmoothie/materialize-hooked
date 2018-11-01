import * as React from 'react';
import { Dropdown, DropdownOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export const useDropdown = (
  ref: React.RefObject<HTMLAnchorElement>,
  options: DropdownProps
) => {
  useEffect(() => {
    if (ref.current) {
      const dropdown = Dropdown.init(ref.current, options);

      if (options.open) {
        dropdown.open();
      }
    }
  });
};

export interface DropdownItemProps {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

export const DropdownItem: React.SFC<DropdownItemProps> = ({
  children,
  onClick
}) => (
  <li>
    <a onClick={onClick}>{children}</a>
  </li>
);

DropdownItem.defaultProps = {
  onClick: () => false
};

export const Divider = () => <li className="divider" tabIndex={-1} />;

export interface DropdownProps extends Partial<DropdownOptions> {
  text: string;
  open?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const DropdownComponent: React.SFC<DropdownProps> = ({
  className,
  text,
  children,
  ...options
}) => {
  const dropdown = useRef<HTMLAnchorElement>();
  useDropdown(dropdown, options as DropdownProps);

  return (
    <div>
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
    </div>
  );
};

DropdownComponent.defaultProps = {
  className: '',
  open: false
};

export default DropdownComponent;
