import * as React from 'react';
import { Datepicker, DatepickerOptions } from 'materialize-css';

const { useEffect, useRef } = React;

import Input, { InputProps } from '../Input';

export const useDatePicker = (
  ref: React.RefObject<HTMLInputElement>,
  options: DatepickerOptions
) => {
  useEffect(() => {
    console.log(ref);
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
  isDisabled,
  isInline,
  ...options
}) => {
  const datePicker = useRef<HTMLInputElement>();

  useDatePicker(datePicker, {
    ...options,
    onClose: function() {
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
      placeholder={placeholder}
      inputClassName={inputClassName}
      isDisabled={isDisabled}
      isInline={isInline}
      type="text"
      className="datepicker"
    />
  );
};

//@ts-ignore
DatePicker.defaultProps = {
  ...Input.defaultProps,
  autoClose: false,
  placeholder: undefined,
  format: 'mmm dd, yyyy',
  parse: undefined,
  defaultDate: undefined,
  setDefaultDate: false,
  disableWeekends: false,
  disableDayFn: undefined,
  firstDay: 0,
  minDate: undefined,
  maxDate: undefined,
  yearRange: 10,
  isRTL: false,
  showMonthAfterYear: false,
  showDaysInNextAndPreviousMonths: false,
  showClearBtn: false,
  i18n: {},
  events: [],
  onSelect: () => undefined,
  onOpen: () => undefined,
  onClose: () => undefined,
  onDraw: () => undefined
};

export default DatePicker;
