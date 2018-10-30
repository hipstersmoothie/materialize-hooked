import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Materialbox } from 'materialize-css';

export const useMaterialBox = (ref, options) => {
  useEffect(() => {
    Materialbox.init(ref.current, options);
  });
};

const MaterialBox = ({ width, src, className, caption, ...options }) => {
  const materialBox = useRef();
  useMaterialBox(materialBox, options);

  return (
    <img
      ref={materialBox}
      className={className}
      width={width}
      src={src}
      data-caption={caption}
    />
  );
};

MaterialBox.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
  caption: PropTypes.string,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number,
  onOpenStart: PropTypes.func,
  onOpenEnd: PropTypes.func,
  onCloseStart: PropTypes.func,
  onCloseEnd: PropTypes.func
};

MaterialBox.defaultProps = {
  className: '',
  width: undefined,
  caption: '',
  inDuration: 275,
  outDuration: 200,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null
};

export default MaterialBox;
