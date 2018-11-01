import * as React from 'react';
import makeClass from 'classnames';

type ClickCallback = (event: React.MouseEvent<HTMLElement>) => void;

export interface RadioButtonProps {
  onClick: ClickCallback;
  children?: React.ReactElement<{}> | string;
  value?: string;
  withGap?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export const RadioButton: React.SFC<RadioButtonProps> = ({
  value,
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
      <label>
        <input
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
