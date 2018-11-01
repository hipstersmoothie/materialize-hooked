import * as React from 'react';
import makeClass from 'classnames';

export interface IconProps {
  /**
   * Render a tiny icon
   * @default false
   */
  isTiny?: boolean;
  /**
   * Render a small icon
   * @default false
   */
  isSmall?: boolean;
  /**
   * Render a medium icon
   * @default false
   */
  isMedium?: boolean;
  /**
   * Render a large icon
   * @default false
   */
  isLarge?: boolean;
  /** The icon to render */
  icon: string;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

const Icon: React.SFC<IconProps> = ({
  className,
  isTiny,
  isSmall,
  isMedium,
  isLarge,
  icon
}) => {
  const iconClass = makeClass(className, {
    'material-icons': true,
    tiny: isTiny,
    small: isSmall,
    medium: isMedium,
    large: isLarge
  });

  return <i className={iconClass}>{icon}</i>;
};

Icon.defaultProps = {
  isTiny: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  className: ''
};

export default Icon;
