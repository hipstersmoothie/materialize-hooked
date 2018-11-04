import { Dropdown, DropdownOptions } from 'materialize-css';
import * as React from 'react';

const { useEffect, useRef } = React;

export const useDropdown = (
  ref: React.RefObject<HTMLAnchorElement>,
  options: DropdownProps
) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const dropdown = Dropdown.init(ref.current, options);

    if (options.open) {
      dropdown.open();
    }
  });
};

export interface DropdownItemProps {
  /** Content of the dropdown item */
  children: React.ReactNode;
  /** Called when the dropdown item is clicked */
  onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
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
  /** Text for the dropdown button */
  text: string;
  /**
   * Whether the dropdown is open
   * @default false
   */
  open?: boolean;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** Dropdown items to display */
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
