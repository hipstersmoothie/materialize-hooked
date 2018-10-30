import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FloatingActionButton } from 'materialize-css';

export const useFixedActionButton = (ref, options) => {
  useEffect(() => {
    FloatingActionButton.init(ref.current, options);
  });
};

const Fab = ({ className, id, onClick, children, icon, ...options }) => {
  const fab = useRef();
  useFixedActionButton(fab, options);

  return (
    <div ref={fab} id={id} className="fixed-action-btn">
      <a
        className={`waves-effect waves-light btn-floating btn-large ${className}`}
        onClick={onClick}
      >
        <i className="large material-icons">{icon}</i>
      </a>
      {children && (
        <ul>
          {React.Children.map(children, child => (
            <li>{child}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Fab.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  hoverEnabled: PropTypes.bool,
  toolbarEnabled: PropTypes.bool
};

Fab.defaultProps = {
  id: '',
  className: '',
  children: [],
  onClick: () => undefined,
  direction: 'top',
  hoverEnabled: true,
  toolbarEnabled: false
};

export default Fab;
