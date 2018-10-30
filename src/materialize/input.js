import React, { useEffect, useRef, useState, forwardRef } from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

import { textareaAutoResize, CharacterCounter } from 'materialize-css';

const useTextArea = (ref, isTextArea = true) => {
  useEffect(() => {
    if (isTextArea) {
      textareaAutoResize(ref.current);
    }
  });
};

const useCharacterCount = (ref, count = undefined) => {
  const [initialized, setInit] = useState();

  useEffect(() => {
    if (count > 0 && !initialized) {
      CharacterCounter.init(ref.current);
      setInit(count);
    }
  });
};

export const FileInput = ({
  className,
  onChange,
  iconClassName,
  fileButtonText,
  placeholder,
  isMultiple,
  isDisabled,
  help,
  icon
}) => {
  const iconClass = makeClass({
    'material-icons': true,
    right: !iconClassName,
    [iconClassName]: iconClassName
  });

  return (
    <div className={`file-field input-field ${className}`}>
      <div className="btn">
        {icon && <i className={iconClass}>{icon}</i>}
        <span>{fileButtonText}</span>
        <input
          type="file"
          disabled={isDisabled}
          multiple={isMultiple}
          onChange={onChange}
        />
      </div>
      <div className="file-path-wrapper">
        <input
          className="file-path validate"
          type="text"
          disabled={isDisabled}
          placeholder={placeholder}
        />
        {help && (
          <span className="helper-text" data-error="wrong" data-success="right">
            {help}
          </span>
        )}
      </div>
    </div>
  );
};

FileInput.propTypes = {
  onChange: PropTypes.func,
  help: PropTypes.string,
  icon: PropTypes.string,
  fileButtonText: PropTypes.string,
  placeholder: PropTypes.string,
  isMultiple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  iconClassName: PropTypes.string,
  className: PropTypes.string
};

FileInput.defaultProps = {
  onChange: () => undefined,
  help: undefined,
  icon: undefined,
  fileButtonText: 'File',
  isMultiple: false,
  isDisabled: false,
  placeholder: '',
  iconClassName: undefined,
  className: undefined
};

export const Input = (
  {
    id,
    label,
    value,
    onChange,
    icon,
    help,
    type,
    placeholder,
    className,
    inputClassName,
    isDisabled,
    isSensitive,
    isInline,
    isTextArea,
    isMultiple,
    fileButtonText,
    length
  },
  ref
) => {
  const input = ref && ref.current ? ref : useRef();
  const wrapperClass = makeClass({
    'input-field': true,
    [className]: className,
    inline: isInline
  });
  const inputClass = makeClass({
    validate: true,
    'materialize-textarea': isTextArea,
    [inputClassName]: inputClassName
  });
  const labelClass = makeClass({
    active: placeholder || value
  });
  const InputComponent = isTextArea ? 'textarea' : 'input';

  useTextArea(input, isTextArea);
  useCharacterCount(input, length);

  if (type === 'file') {
    return (
      <FileInput
        className={className}
        fileButtonText={fileButtonText}
        isMultiple={isMultiple}
        isDisabled={isDisabled}
        placeholder={placeholder}
        value={value}
        icon={icon}
        help={help}
        onChange={onChange}
      />
    );
  }

  return (
    <div className={wrapperClass}>
      {icon && <i className="material-icons prefix">{icon}</i>}
      <InputComponent
        ref={input}
        value={value}
        disabled={isDisabled}
        placeholder={placeholder}
        id={id}
        type={isSensitive ? 'password' : type}
        className={inputClass}
        data-length={length}
        onChange={onChange}
      />
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      {help && (
        <span className="helper-text" data-error="wrong" data-success="right">
          {help}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.string,
  length: PropTypes.number,
  help: PropTypes.string,
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime',
    'email',
    'file',
    'month',
    'number',
    'password',
    'reset',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSensitive: PropTypes.bool,
  isTextArea: PropTypes.bool,
  isInline: PropTypes.bool,
  fileButtonText: PropTypes.string,
  isMultiple: PropTypes.bool
};

Input.defaultProps = {
  placeholder: undefined,
  length: undefined,
  onChange: () => undefined,
  value: '',
  type: 'text',
  icon: undefined,
  help: undefined,
  inputClassName: undefined,
  className: '',
  label: undefined,
  isDisabled: false,
  isSensitive: false,
  isTextArea: false,
  isInline: false,
  fileButtonText: 'File',
  isMultiple: false
};

export default forwardRef(Input);
