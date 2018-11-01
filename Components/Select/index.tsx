import * as React from 'react';
import makeClass from 'classnames';
import { FormSelect, FormSelectOptions } from 'materialize-css';

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
  children?: React.ReactNode;
  value?: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  isIconLeft?: boolean;
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
  children: React.ReactNode;
  label?: string;
  isMultiple?: boolean;
  isDisabled?: boolean;
  isBrowserDefault?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelectComponent: React.SFC<FormSelectProps> = ({
  children,
  label,
  isMultiple,
  isDisabled,
  isBrowserDefault,
  onChange,
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
  const labelComponent = <label>{label}</label>;

  return (
    <div className={wrapperSelectClass}>
      {isBrowserDefault && labelComponent}

      <select
        ref={select}
        className={selectClass}
        multiple={isMultiple}
        disabled={isDisabled}
        onChange={onChange}
      >
        {children}
      </select>
      {isBrowserDefault && labelComponent}
    </div>
  );
};

FormSelectComponent.defaultProps = {
  label: undefined,
  isMultiple: false,
  isDisabled: false,
  onChange: () => undefined,
  isBrowserDefault: false,
  classes: '',
  dropdownOptions: {}
};

export default FormSelectComponent;
