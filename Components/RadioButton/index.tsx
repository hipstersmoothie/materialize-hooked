import makeClass from 'classnames';
import * as React from 'react';

type ClickCallback = (event: React.MouseEvent<HTMLElement>) => void;

export interface RadioButtonProps {
  /** ID for the input */
  id: string;
  onClick: ClickCallback;
  /** Called when the radio button is clicked */
  children?: React.ReactElement<{}> | string;
  /** the value/label for the radio button */
  value?: string;
  /**
   * Render the radio with a gap
   * @default
   */
  withGap?: boolean;
  /**
   * Render a checked radio
   * @default
   */
  isChecked?: boolean;
  /**
   * Render a dissabled radio
   * @default
   */
  isDisabled?: boolean;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

export const RadioButton: React.SFC<RadioButtonProps> = ({
  value,
  id,
  children,
  withGap,
  onClick,
  className,
  isChecked,
  isDisabled
}) => {
  const radioClass = makeClass(className, {
    'with-gap': withGap
  });

  return (
    <p>
      <label htmlFor={id}>
        <input
          id={id}
          className={radioClass}
          checked={isChecked}
          disabled={isDisabled}
          name="group1"
          type="radio"
          onClick={onClick}
        />
        <span>{value || children}</span>
      </label>
    </p>
  );
};

RadioButton.defaultProps = {
  onClick: () => undefined,
  className: ''
};

export default RadioButton;
