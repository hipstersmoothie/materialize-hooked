import * as React from 'react';
import makeClass from 'classnames';

export interface IconProps {
  isTiny?: boolean;
  isSmall?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  icon: string;
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
