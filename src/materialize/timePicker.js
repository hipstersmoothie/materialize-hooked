import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Timepicker } from 'materialize-css';

import Input from './Input';

export const useTimePicker = (ref, options) => {
  useEffect(() => {
    Timepicker.init(ref.current, options);
  });
};

const TimePicker = ({
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
  const timePicker = useRef();

  if (!options.i18n) {
    delete options.i18n;
  }

  useTimePicker(timePicker, {
    ...options,
    onCloseEnd: (...args) => {
      onChange(timePicker.current);
      options.onCloseEnd(...args);
    }
  });

  return (
    <Input
      ref={timePicker}
      icon={icon}
      help={help}
      value={value}
      label={label}
      placeholder={placeholder}
      inputClassName={inputClassName}
      isDisabled={isDisabled}
      isInline={isInline}
      type="text"
      className="timepicker"
      onChange={onChange}
    />
  );
};

TimePicker.propTypes = {
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

  duration: PropTypes.number,
  container: PropTypes.string,
  showClearBtn: PropTypes.bool,
  defaultTime: PropTypes.string,
  fromNow: PropTypes.number,
  i18n: PropTypes.object,
  autoClose: PropTypes.bool,
  twelveHour: PropTypes.bool,
  vibrate: PropTypes.bool,

  onOpenStart: PropTypes.func,
  onOpenEnd: PropTypes.func,
  onCloseStart: PropTypes.func,
  onCloseEnd: PropTypes.func,
  onSelect: PropTypes.func
};

TimePicker.defaultProps = {
  ...Input.defaultProps,

  duration: 350,
  container: null,
  showClearBtn: false,
  defaultTime: 'now',
  fromNow: 0,
  i18n: undefined,
  autoClose: false,
  twelveHour: true,
  vibrate: true,
  onOpenStart: () => undefined,
  onOpenEnd: () => undefined,
  onCloseStart: () => undefined,
  onCloseEnd: () => undefined,
  onSelect: () => undefined
};

export default TimePicker;
