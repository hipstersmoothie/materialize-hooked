import * as React from 'react';
import makeClass from 'classnames';
import { Modal, ModalOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export const useModal = (
  ref: React.RefObject<HTMLDivElement>,
  options: ModalOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Modal.init(ref.current, options);
    }
  });
};

export interface ModalProps extends Partial<ModalOptions> {
  id: string;
  hasFixedFooter?: boolean;
  isBottomSheet?: boolean;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const ModalComponent: React.SFC<ModalProps> = ({
  children,
  footer,
  id,
  hasFixedFooter,
  isBottomSheet,
  ...options
}) => {
  const modal = useRef<HTMLDivElement>();
  useModal(modal, options as ModalOptions);
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

ModalComponent.defaultProps = {
  footer: undefined,
  isBottomSheet: false,
  hasFixedFooter: false,
  opacity: 0.5,
  inDuration: 250,
  outDuration: 250,
  preventScrolling: true,
  dismissible: true,
  startingTop: '4%',
  endingTop: '10%'
};

export default ModalComponent;
