import React from 'react';
import PropTypes from 'prop-types';

export const Breadcrumb = ({ value, onClick }) => (
  <a className="breadcrumb" onClick={onClick}>
    {value}
  </a>
);

Breadcrumb.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const Breadcrumbs = ({ className, children }) => (
  <nav className={className}>
    <div className="nav-wrapper">
      <div className="col s12">{children}</div>
    </div>
  </nav>
);

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Breadcrumbs.defaultProps = {
  className: ''
};

export default Breadcrumbs;
