import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Pushpin } from 'materialize-css';

export const usePushpin = (ref, options) => {
  useEffect(() => {
    Pushpin.init(ref.current, options);
  });
};

const PushpinComponent = ({ children, className, ...options }) => {
  const pushPin = useRef();
  usePushpin(pushPin, options);

  const pushPinClass = makeClass({
    pushpin: true,
    [className]: className
  });

  return (
    <div ref={pushPin} className={pushPinClass}>
      {children}
    </div>
  );
};

PushpinComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  offset: PropTypes.number,
  onPositionChange: PropTypes.func
};

PushpinComponent.defaultProps = {
  className: undefined,
  top: 0,
  bottom: Infinity,
  offset: 0,
  onPositionChange: null
};

export default PushpinComponent;
