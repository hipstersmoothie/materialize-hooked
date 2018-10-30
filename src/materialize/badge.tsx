import * as React from 'react';
import makeClass from 'classnames';

export interface BadgeProps {
  isNew?: boolean;
  value: string;
  caption?: string;
  className?: string;
}

const defaultProps = {
  isNew: false,
  caption: undefined,
  className: ''
};

const Badge = (props: BadgeProps) => {
  const { value, className, isNew, caption } = { ...defaultProps, ...props };
  const badgeClass = makeClass({
    badge: true,
    [className]: className,
    new: isNew
  });

  return (
    <span data-badge-caption={caption} className={badgeClass}>
      {value}
    </span>
  );
};

export default Badge;
