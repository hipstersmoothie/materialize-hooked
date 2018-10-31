import * as React from 'react';
import makeClass from 'classnames';

const { useEffect, useRef } = React;

export interface CheckBoxProps {
  id?: string;
  children?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isFilledIn?: boolean;
  isIndeterminate?: boolean;
  className?: string;
  isDisabled?: boolean;
}

const CheckBox: React.SFC<CheckBoxProps> = ({
  id,
  children,
  className,
  value,
  onChange,
  isChecked,
  isFilledIn,
  isIndeterminate,
  isDisabled
}) => {
  const checkbox = useRef<HTMLInputElement>();
  const checkBoxClass = makeClass(className, {
    'filled-in': isFilledIn
  });

  useEffect(() => {
    if (isIndeterminate && checkbox.current) {
      checkbox.current.indeterminate = true;
    }
  });

  return (
    <p>
      <label>
        <input
          ref={checkbox}
          id={id}
          type="checkbox"
          className={checkBoxClass}
          disabled={isDisabled}
          checked={isChecked}
          onChange={onChange}
        />
        <span>{value || children}</span>
      </label>
    </p>
  );
};

CheckBox.defaultProps = {
  id: undefined,
  children: undefined,
  value: undefined,
  onChange: () => undefined,
  isChecked: false,
  isFilledIn: false,
  className: '',
  isIndeterminate: false,
  isDisabled: false
};

export default CheckBox;
