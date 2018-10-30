import React, { useEffect, forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import makeClass from 'classnames';
import { Modal } from 'materialize-css';

export const useModal = (ref, options) => {
  useEffect(() => {
    Modal.init(ref.current, options);
  });
};

const ModalComponent = ({
  children,
  footer,
  id,
  hasFixedFooter,
  isBottomSheet,
  ...options
}) => {
  const modal = useRef();
  useModal(modal, options);
  const modalClass = makeClass({
    modal: true,
    'modal-fixed-footer': hasFixedFooter,
    'bottom-sheet': isBottomSheet
  });

  return (
    <div ref={modal} id={id} className={modalClass}>
      <div className="modal-content">{children}</div>
      <div className="modal-footer">{footer}</div>
    </div>
  );
};

ModalComponent.propTypes = {
  id: PropTypes.string.isRequired,
  hasFixedFooter: PropTypes.bool,
  isBottomSheet: PropTypes.bool,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired
};

ModalComponent.defaultProps = {
  footer: undefined,
  isBottomSheet: false,
  hasFixedFooter: false
};

export default ModalComponent;
