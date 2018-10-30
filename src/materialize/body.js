import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

Body.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

Body.defaultProps = {
  className: ''
};

export default Body;
