import * as React from 'react';
import makeClass from 'classnames';

export interface BadgeProps {
  /** The badge is in a 'new' states */
  isNew?: boolean;
  /** The number for the badge to display */
  value: number;
  /** The caption to display with the badge */
  caption?: string;
  /** A className to attach to the root component */
  className?: string;
}

export const Badge: React.SFC<BadgeProps> = ({
  className,
  isNew,
  caption,
  value
}) => {
  const badgeClass = makeClass(className, {
    badge: true,
    new: isNew
  });

  return (
    <span data-badge-caption={caption} className={badgeClass}>
      {value}
    </span>
  );
};

Badge.defaultProps = {
  isNew: false,
  caption: undefined,
  className: ''
};

export default Badge;
