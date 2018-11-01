import * as React from 'react';
import makeClass from 'classnames';

import { textareaAutoResize, CharacterCounter } from 'materialize-css';

const { useEffect, useRef, useState, forwardRef } = React;

const useTextArea = (
  ref: React.RefObject<HTMLDivElement>,
  isTextArea = true
) => {
  useEffect(() => {
    if (isTextArea && ref.current) {
      textareaAutoResize(ref.current);
    }
  });
};

const useCharacterCount = (ref: React.RefObject<HTMLDivElement>, count = 0) => {
  const [initialized, setInit] = useState();

  useEffect(() => {
    if (count > 0 && !initialized && ref.current) {
      CharacterCounter.init(ref.current);
      setInit(count);
    }
  });
};

export interface IChangeElement extends HTMLElement {
  value: string;
}

type OnChangeCallback = (event: React.ChangeEvent<IChangeElement>) => void;

export interface FileInputProps {
  onChange?: OnChangeCallback;
  help?: string;
  icon?: string;
  fileButtonText?: string;
  placeholder?: string;
  isMultiple?: boolean;
  isDisabled?: boolean;
  iconClassName?: string;
  className?: string;
}

export const FileInput: React.SFC<FileInputProps> = ({
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
  const iconClass = makeClass(iconClassName, {
    'material-icons': true,
    right: !iconClassName
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

export interface InputProps {
  id: string;
  onChange?: OnChangeCallback;
  value?: string;
  icon?: string;
  length?: number;
  help?: string;
  type?:
    | 'color'
    | 'date'
    | 'datetime'
    | 'email'
    | 'file'
    | 'month'
    | 'number'
    | 'password'
    | 'reset'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  label?: string | React.ReactNode;
  placeholder?: string;
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
  isDisabled?: boolean;
  isSensitive?: boolean;
  isTextArea?: boolean;
  isInline?: boolean;
  fileButtonText?: string;
  isMultiple?: boolean;
}

export const Input: React.SFC<InputProps> = (
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
    iconClassName,
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
  const input = ref ? ref : useRef();
  const wrapperClass = makeClass(className, {
    'input-field': true,
    inline: isInline
  });
  const inputClass = makeClass(inputClassName, {
    validate: true,
    'materialize-textarea': isTextArea
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
        iconClassName={iconClassName}
        fileButtonText={fileButtonText}
        isMultiple={isMultiple}
        isDisabled={isDisabled}
        placeholder={placeholder}
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
  iconClassName: undefined,
  label: undefined,
  isDisabled: false,
  isSensitive: false,
  isTextArea: false,
  isInline: false,
  fileButtonText: 'File',
  isMultiple: false
};

export default forwardRef(Input);
