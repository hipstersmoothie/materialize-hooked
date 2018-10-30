import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Autocomplete } from 'materialize-css';

import Input from './input';

export const useAutocomplete = (ref, options) => {
  useEffect(() => {
    Autocomplete.init(ref.current, options);
  });
};

const AutoComplete = ({
  id,
  icon,
  help,
  onChange,
  value,
  label,
  placeholder,
  className,
  inputClassName,
  isDisabled,
  isInline,
  ...options
}) => {
  const autocomplete = useRef();
  useAutocomplete(autocomplete, {
    ...options,
    onAutocomplete: value => {
      onChange({ currentTarget: { value } });
      options.onAutocomplete(value);
    }
  });
  console.log(value);

  const autocompleteClass = makeClass({
    [inputClassName]: inputClassName,
    autocomplete: true
  });

  return (
    <Input
      ref={autocomplete}
      id={id}
      inputClassName={autocompleteClass}
      type="text"
      icon={icon}
      help={help}
      value={value}
      label={label}
      placeholder={placeholder}
      className={className}
      isDisabled={isDisabled}
      isInline={isInline}
      onChange={onChange}
    />
  );
};

AutoComplete.propTypes = {
  // Input props
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  help: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,

  data: PropTypes.object.isRequired,
  limit: PropTypes.number,
  onAutocomplete: PropTypes.func,
  minLength: PropTypes.number,
  sortFunction: PropTypes.func
};

AutoComplete.defaultProps = {
  ...Input.defaultProps,

  limit: Infinity,
  onAutocomplete: () => undefined,
  minLength: 1,
  sortFunction: undefined
};

export default AutoComplete;
