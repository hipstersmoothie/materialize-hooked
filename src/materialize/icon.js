import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

const Icon = ({ className, isTiny, isSmall, isMedium, isLarge, icon }) => {
  const iconClass = makeClass({
    'material-icons': true,
    [className]: className,
    tiny: isTiny,
    small: isSmall,
    medium: isMedium,
    large: isLarge
  });

  return <i className={iconClass}>{icon}</i>;
};

Icon.propTypes = {
  isTiny: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

Icon.defaultProps = {
  isTiny: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  className: ''
};

export default Icon;
