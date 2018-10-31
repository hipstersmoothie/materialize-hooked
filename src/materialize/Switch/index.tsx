import * as React from 'react';
import makeClass from 'classnames';

export interface SwitchProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  isChecked?: boolean;
  on?: string;
  off?: string;
  className?: string;
}

export const Switch: React.SFC<SwitchProps> = ({
  on,
  off,
  className,
  isDisabled,
  isChecked,
  onChange
}) => {
  const switchClass = makeClass(className, {
    switch: true
  });

  return (
    <div className={switchClass}>
      <label>
        {off}
        <input
          disabled={isDisabled}
          checked={isChecked}
          type="checkbox"
          onChange={onChange}
        />
        <span className="lever" />
        {on}
      </label>
    </div>
  );
};

Switch.defaultProps = {
  on: 'On',
  off: 'Off',
  className: '',
  isDisabled: false,
  isChecked: false,
  onChange: () => undefined
};

export default Switch;
