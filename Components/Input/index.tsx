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

export interface FileInputProps extends Partial<InputProps> {
  /** If file button, text for file button */
  fileButtonText?: string;
  /**
   * If file input, allow multiple files
   * @default false
   */
  isMultiple?: boolean;
  /** Aria label for the file input */
  ariaLabel: string;
}

export const FileInput: React.SFC<FileInputProps> = ({
  className,
  onChange,
  iconClassName,
  fileButtonText,
  placeholder,
  isMultiple,
  isDisabled,
  errorText,
  ariaLabel,
  successText,
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
          aria-label={ariaLabel}
          disabled={isDisabled}
          multiple={isMultiple}
          onChange={onChange}
        />
      </div>
      <div className="file-path-wrapper">
        <input
          className="file-path validate"
          type="text"
          aria-label={ariaLabel}
          disabled={isDisabled}
          placeholder={placeholder}
        />
        {help && (
          <span
            className="helper-text"
            data-error={errorText}
            data-success={successText}
          >
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
  /** ID for the input */
  id: string;
  /** Called when the input value changes */
  onChange?: OnChangeCallback;
  /** Value to display in the input */
  value?: string;
  /** Icon to dispaly to the left of the input */
  icon?: string;
  /** Max length of input value */
  length?: number;
  /** Text below a label */
  help?: string;
  /** Type of input */
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
  /** Label for the input. Floats above */
  label?: string | React.ReactNode;
  /** Aria label for input if no label is provided */
  ariaLabel?: string;
  /** Placeholder to display before typing */
  placeholder?: string;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** ClassName to attach to the icon */
  iconClassName?: string;
  /** ClassName to attach to the input */
  inputClassName?: string;
  /**
   * Render a disabled input
   * @default
   */
  isDisabled?: boolean;
  /**
   * Render a sensitive input (password)
   * @default
   */
  isSensitive?: boolean;
  /**
   * Render a text area
   * @default
   */
  isTextArea?: boolean;
  /**
   * Render an inline input
   * @default
   */
  isInline?: boolean;
  /** If file input, text for the button */
  fileButtonText?: string;
  /** If file input, upload multiple files */
  isMultiple?: boolean;
  /** Do not try to run HTML validation on the inputted value */
  noValidate?: boolean;
  /** Text to display when validation fails */
  errorText?: string;
  /** Text to display when validation succeeds  */
  successText?: string;
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
    noValidate,
    length,
    errorText,
    successText,
    ariaLabel
  },
  ref
) => {
  const input = !ref.hasOwnProperty('current') ? useRef() : ref;
  const wrapperClass = makeClass(className, {
    'input-field': true,
    inline: isInline
  });
  const inputClass = makeClass(inputClassName, {
    validate: !noValidate,
    'materialize-textarea': isTextArea
  });
  const labelClass = makeClass({
    active: placeholder || value
  });
  const InputComponent = isTextArea ? 'textarea' : 'input';

  useTextArea(input, isTextArea);
  useCharacterCount(input, length);

  if (type === 'file') {
    if (!ariaLabel) {
      throw new TypeError('Aria label is required for file inputs.');
    }

    return (
      <FileInput
        className={className}
        ariaLabel={ariaLabel}
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
        aria-label={!label ? ariaLabel : undefined}
      />
      {label && (
        <label className={labelClass} htmlFor={id}>
          {label}
        </label>
      )}
      {help && (
        <span
          className="helper-text"
          data-error={errorText}
          data-success={successText}
        >
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
  noValidate: false,
  isTextArea: false,
  isInline: false,
  fileButtonText: 'File',
  isMultiple: false
};

export default forwardRef(Input);
