import * as React from 'react';
import makeClass from 'classnames';

export interface ButtonProps {
  className?: string;
  id?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  icon?: string;
  text?: string;
  isPulsing?: boolean;
  isFlat?: boolean;
  isFloating?: boolean;
  isLarge?: boolean;
  isSmall?: boolean;
  isDisabled?: boolean;
  isIconLeft?: boolean;
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
  isSubmit
}) => {
  const buttonClass = makeClass(className, {
    'waves-effect waves-light': !isFloating,
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
  isSubmit: false
};

export default Button;
