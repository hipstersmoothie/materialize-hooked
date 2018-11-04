import makeClass from 'classnames';
import { FormSelect, FormSelectOptions } from 'materialize-css';
import * as React from 'react';

const { useEffect, useRef } = React;

export const useFormSelect = (
  ref: React.RefObject<HTMLSelectElement>,
  options: FormSelectOptions
) => {
  useEffect(() => {
    if (ref.current) {
      FormSelect.init(ref.current, options);
    }
  });
};

export interface SelectItemProps {
  /** The value/children of the select item */
  children?: React.ReactNode;
  /** The value/children of the select item */
  value?: string;
  /**
   * Render a disabled item
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Render a selected item
   * @default false
   */
  isSelected?: boolean;
  /**
   * Render the icon the left
   * @default false
   */
  isIconLeft?: boolean;
  /** Icon to use for the item */
  icon?: string;
}

export const SelectItem: React.SFC<SelectItemProps> = ({
  children,
  value,
  isDisabled,
  isSelected,
  icon,
  isIconLeft
}) => {
  return (
    <option
      value={value}
      disabled={isDisabled || isSelected}
      selected={isSelected}
      data-icon={icon}
      className={isIconLeft ? 'left' : undefined}
    >
      {children || value}
    </option>
  );
};

SelectItem.defaultProps = {
  isDisabled: false,
  isSelected: false,
  isIconLeft: false,
  icon: undefined
};

export interface SelectGroupProps {
  children: React.ReactNode;
  label: string;
  isDisabled?: boolean;
  isSelected?: boolean;
}

export const SelectGroup: React.SFC<SelectGroupProps> = ({
  label,
  children,
  isDisabled
}) => {
  return (
    <optgroup label={label} disabled={isDisabled}>
      {children}
    </optgroup>
  );
};

SelectGroup.defaultProps = {
  isDisabled: false
};

export interface FormSelectProps extends Partial<FormSelectOptions> {
  /** ID for the input */
  id: string;
  /** Form select items */
  children: React.ReactNode;
  /** Label for the select */
  label?: string;
  /**
   * The select can select multiple values
   * @default false
   */
  isMultiple?: boolean;
  /**
   * Render a disabled select
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Use the browser default select
   * @default false
   */
  isBrowserDefault?: boolean;
  /** Aria label for the file input */
  ariaLabel?: string;
  /** Called when the select value changes */
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const FormSelectComponent: React.SFC<FormSelectProps> = ({
  children,
  label,
  isMultiple,
  isDisabled,
  isBrowserDefault,
  onChange,
  ariaLabel,
  id,
  ...options
}) => {
  const select = useRef<HTMLSelectElement>();
  useFormSelect(select, options as FormSelectOptions);
  const wrapperSelectClass = makeClass({
    'input-field': !isBrowserDefault
  });
  const selectClass = makeClass({
    'browser-default': isBrowserDefault
  });
  const labelComponent = <label htmlFor={id}>{label}</label>;

  return (
    <div className={wrapperSelectClass}>
      {isBrowserDefault && labelComponent}

      <select
        ref={select}
        id={id}
        aria-label={label ? undefined : ariaLabel}
        className={selectClass}
        multiple={isMultiple}
        disabled={isDisabled}
        onChange={onChange}
      >
        {children}
      </select>

      {!isBrowserDefault && labelComponent}
    </div>
  );
};

FormSelectComponent.defaultProps = {
  label: undefined,
  isMultiple: false,
  isDisabled: false,
  onChange: () => undefined,
  isBrowserDefault: false
};

export default FormSelectComponent;
