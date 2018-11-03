import makeClass from 'classnames';
import { Datepicker, DatepickerOptions } from 'materialize-css';
import * as React from 'react';

const { useEffect, useRef } = React;

import Input, { InputProps } from '../Input';

export const useDatePicker = (
  ref: React.RefObject<HTMLInputElement>,
  options: DatepickerOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Datepicker.init(ref.current, options);
    }
  });
};

export type DatePickerProps = InputProps & Partial<DatepickerOptions>;

export const DatePicker: React.SFC<DatePickerProps> = ({
  id,
  icon,
  help,
  onChange,
  value,
  label,
  placeholder,
  className,
  inputClassName,
  ariaLabel,
  isDisabled,
  isInline,
  ...options
}) => {
  const datePicker = useRef<HTMLInputElement>();
  const dateClass = makeClass(className, 'datepicker');

  useDatePicker(datePicker, {
    ...options,
    onClose() {
      if (onChange && datePicker.current) {
        onChange({
          target: datePicker.current,
          currentTarget: datePicker.current
        } as React.ChangeEvent<HTMLInputElement>);
      }

      if (options.onClose) {
        options.onClose.call(this);
      }
    }
  } as DatepickerOptions);

  return (
    <Input
      ref={datePicker}
      id={id}
      icon={icon}
      help={help}
      value={value}
      label={label}
      ariaLabel={ariaLabel}
      placeholder={placeholder}
      inputClassName={inputClassName}
      isDisabled={isDisabled}
      isInline={isInline}
      type="text"
      className={dateClass}
    />
  );
};

export default DatePicker;
