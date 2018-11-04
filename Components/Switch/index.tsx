import makeClass from 'classnames';
import * as React from 'react';

export interface SwitchProps {
  /**
   * The switch is disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The switch is on
   * @default false
   */
  isOn?: boolean;
  /**
   * The on state text
   * @default on
   */
  on?: string;
  /**
   * The off state text
   * @default off
   */
  off?: string;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** Called when the switch value changes */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Switch: React.SFC<SwitchProps> = ({
  on,
  off,
  className,
  isDisabled,
  isOn,
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
          checked={isOn}
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
  isOn: false,
  onChange: () => undefined
};

export default Switch;
