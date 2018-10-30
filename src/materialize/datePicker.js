import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Datepicker } from 'materialize-css';

import Input from './input';

export const useDatePicker = (ref, options) => {
  useEffect(() => {
    Datepicker.init(ref.current, options);
  });
};

const DatePicker = ({
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
  const datePicker = useRef();

  useDatePicker(datePicker, {
    ...options,
    onClose: (...args) => {
      onChange(datePicker.current);
      options.onClose(...args);
    }
  });

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

DatePicker.propTypes = {
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

  autoClose: PropTypes.bool,
  format: PropTypes.string,
  parse: PropTypes.func,
  defaultDate: PropTypes.string,
  setDefaultDate: PropTypes.bool,
  disableWeekends: PropTypes.bool,
  disableDayFn: PropTypes.func,
  firstDay: PropTypes.number,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  yearRange: PropTypes.number,
  isRTL: PropTypes.bool,
  showMonthAfterYear: PropTypes.bool,
  showDaysInNextAndPreviousMonths: PropTypes.bool,
  showClearBtn: PropTypes.bool,
  i18n: PropTypes.object,
  events: PropTypes.array,
  onSelect: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onDraw: PropTypes.func
};

DatePicker.defaultProps = {
  ...Input.defaultProps,
  autoClose: false,
  placeholder: undefined,
  format: 'mmm dd, yyyy',
  parse: null,
  defaultDate: null,
  setDefaultDate: false,
  disableWeekends: false,
  disableDayFn: null,
  firstDay: 0,
  minDate: null,
  maxDate: null,
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
