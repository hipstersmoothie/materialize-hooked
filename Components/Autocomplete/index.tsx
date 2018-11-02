import * as React from 'react';
import makeClass from 'classnames';
import { Autocomplete, AutocompleteOptions } from 'materialize-css';

import Input, { InputProps } from '../Input';

const { useEffect, useRef } = React;

export const useAutocomplete = (
  ref: React.RefObject<HTMLInputElement>,
  options: AutocompleteOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Autocomplete.init(ref.current, options);
    }
  });
};

type AutoCompleteProps = InputProps & Partial<AutocompleteOptions>;

export const AutoComplete: React.SFC<AutoCompleteProps> = ({
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
  const autocomplete = useRef<HTMLInputElement>();

  useAutocomplete(autocomplete, {
    ...options,
    onAutocomplete: function(value) {
      if (onChange) {
        onChange({
          target: { value },
          currentTarget: { value }
        } as React.ChangeEvent<HTMLInputElement>);
      }

      if (options.onAutocomplete) {
        options.onAutocomplete.call(this, value);
      }
    }
  } as AutocompleteOptions);

  const autocompleteClass = makeClass(inputClassName, {
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

AutoComplete.defaultProps = Input.defaultProps;

export default AutoComplete;
