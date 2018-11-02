import * as React from 'react';
import { Timepicker, TimepickerOptions } from 'materialize-css';

import Input, { InputProps } from '../Input';

const { useEffect, useRef } = React;

export const useTimePicker = (
  ref: React.RefObject<HTMLInputElement>,
  options: TimepickerOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Timepicker.init(ref.current, options);
    }
  });
};

export type TimePickerProps = InputProps & Partial<TimepickerOptions>;

const TimePicker: React.SFC<TimePickerProps> = ({
  id,
  icon,
  help,
  onChange,
  value,
  label,
  placeholder,
  className,
  ariaLabel,
  inputClassName,
  isDisabled,
  isInline,
  ...options
}) => {
  const timePicker = useRef<HTMLInputElement>();

  if (!options.i18n) {
    delete options.i18n;
  }

  useTimePicker(timePicker, {
    ...options,
    onCloseEnd: function(el) {
      if (onChange && timePicker.current) {
        onChange({
          target: timePicker.current,
          currentTarget: timePicker.current
        } as React.ChangeEvent<HTMLInputElement>);
      }

      if (options.onCloseEnd) {
        options.onCloseEnd.call(this, el);
      }
    }
  } as TimepickerOptions);

  return (
    <Input
      ref={timePicker}
      id={id}
      icon={icon}
      help={help}
      value={value}
      label={label}
      placeholder={placeholder}
      ariaLabel={ariaLabel}
      inputClassName={inputClassName}
      isDisabled={isDisabled}
      isInline={isInline}
      type="text"
      className="timepicker"
      onChange={onChange}
    />
  );
};

TimePicker.defaultProps = Input.defaultProps;

export default TimePicker;
