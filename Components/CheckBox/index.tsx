import * as React from 'react';
import makeClass from 'classnames';

const { useEffect, useRef } = React;

export interface CheckBoxProps {
  /** The id of the checkbox */
  id?: string;
  /** The value/label of the checkbox */
  children?: React.ReactNode;
  /** The value/label of the checkbox */
  value?: string;
  /** Called when the value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Render a checked checkBox button
   * @default false
   */
  isChecked?: boolean;
  /**
   * Render a filled in checkBox button
   * @default false
   */
  isFilledIn?: boolean;
  /**
   * Render a indeterminate checkBox button
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * Render a disabled checkBox button
   * @default false
   */
  isDisabled?: boolean;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
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
