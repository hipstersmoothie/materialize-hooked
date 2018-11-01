import * as React from 'react';
import makeClass from 'classnames';

export interface ButtonProps {
  /**  A className to attach to the root component */
  className?: string;
  /**  A id to attach to the root component */
  id?: string;
  /**
   * A className to attach to the root component
   * @default
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  /**  An icon to display in the button */
  icon?: string;
  /**  The text of the button. */
  text?: string;
  /**  The text of the button. (Only text or children will render) */
  children?: React.ReactNode;
  /**
   * Apply a pulsing effect to a button
   * @default false
   */
  isPulsing?: boolean;
  /**
   * Render a flat button
   * @default false
   */
  isFlat?: boolean;
  /**
   * Render a floating button
   * @default false
   */
  isFloating?: boolean;
  /**
   * Render a large button
   * @default false
   */
  isLarge?: boolean;
  /**
   * Render a small button
   * @default false
   */
  isSmall?: boolean;
  /**
   * Render a disabled button
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Render the icon on the left button
   * @default false
   */
  isIconLeft?: boolean;
  /**
   * Render the icon with waves effect
   * @default false
   */
  withWaves?: boolean;
  /**
   * Whether the button is submit button
   * @default false
   */
  isSubmit?: boolean;
}

const Button: React.SFC<ButtonProps> = ({
  className,
  id,
  onClick,
  icon,
  text,
  isFlat,
  isFloating,
  isLarge,
  isSmall,
  isPulsing,
  isDisabled,
  isIconLeft,
  isSubmit,
  withWaves
}) => {
  const buttonClass = makeClass(className, {
    'waves-effect waves-light': !isFloating || withWaves,
    'btn-flat': isFlat,
    'btn-floating': isFloating,
    'btn-large': isLarge,
    'btn-small': isSmall,
    disabled: isDisabled,
    pulse: isPulsing,
    btn: !isFlat && !isFloating
  });
  const hasIcon = isSubmit || (text && icon);
  const iconClass = makeClass({
    'material-icons': true,
    right: hasIcon && !isIconLeft,
    left: hasIcon && isIconLeft
  });

  const iconComponent = icon && <i className={iconClass}>{icon}</i>;

  if (isSubmit) {
    return (
      <button
        id={id}
        className={buttonClass}
        type="submit"
        name="action"
        onClick={onClick}
      >
        {text || 'Submit'}
        {icon ? iconComponent : <i className={iconClass}>send</i>}
      </button>
    );
  }

  return (
    <a className={buttonClass} onClick={onClick}>
      {iconComponent}
      {text}
    </a>
  );
};

Button.defaultProps = {
  className: '',
  id: undefined,
  onClick: () => undefined,
  text: undefined,
  isFlat: false,
  isPulsing: false,
  isFloating: false,
  isLarge: false,
  isSmall: false,
  isDisabled: false,
  isIconLeft: false,
  withWaves: false,
  isSubmit: false
};

export default Button;
