import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({ value, className, isNew, caption }) => {
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

Badge.propTypes = {
  isNew: PropTypes.bool,
  value: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string
};

Badge.defaultProps = {
  isNew: false,
  caption: undefined,
  className: ''
};

export default Badge;
