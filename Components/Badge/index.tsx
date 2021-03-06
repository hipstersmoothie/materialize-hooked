import makeClass from 'classnames';
import * as React from 'react';

export interface BadgeProps {
  /**
   * The badge is in a 'new' states
   * @default false
   */
  isNew?: boolean;
  /** The number for the badge to display */
  value: number;
  /** The caption to display with the badge */
  caption?: string;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

const Badge: React.SFC<BadgeProps> = ({ className, isNew, caption, value }) => {
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
