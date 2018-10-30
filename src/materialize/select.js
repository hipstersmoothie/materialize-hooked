import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { FormSelect } from 'materialize-css';

export const useFormSelect = (ref, options) => {
  useEffect(() => {
    FormSelect.init(ref.current, options);
    console.log(ref.current);
  });
};

export const SelectItem = ({
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

SelectItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isIconLeft: PropTypes.bool,
  icon: PropTypes.string
};

SelectItem.defaultProps = {
  isDisabled: false,
  isSelected: false,
  isIconLeft: false,
  icon: undefined
};

export const SelectGroup = ({ label, children, isDisabled, isSelected }) => {
  return (
    <optgroup label={label} disabled={isDisabled} selected={isSelected}>
      {children}
    </optgroup>
  );
};

SelectGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool
};

SelectGroup.defaultProps = {
  isDisabled: false,
  isSelected: false
};

const FormSelectComponent = ({
  children,
  label,
  isMultiple,
  isDisabled,
  isBrowserDefault,
  onChange,
  ...options
}) => {
  const select = useRef();
  useFormSelect(select, options);
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

FormSelectComponent.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  isMultiple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isBrowserDefault: PropTypes.bool,
  onChange: PropTypes.func,
  classes: PropTypes.string,
  dropdownOptions: PropTypes.object
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
