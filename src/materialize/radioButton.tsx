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

const defaultProps = {
  onClick: () => undefined,
  className: ''
};

const RadioButton = (props: RadioButtonProps) => {
  const {
    value,
    children,
    withGap,
    onClick,
    className,
    isChecked,
    isDisabled
  } = { ...defaultProps, ...props };
  const radioClass = makeClass({
    'with-gap': withGap,
    [className]: className
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

export default RadioButton;
