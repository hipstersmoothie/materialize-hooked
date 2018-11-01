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
  /** The id of the modal */
  id: string;
  /**
   * Render the modal with a fixed footer
   * @default
   */
  hasFixedFooter?: boolean;
  /**
   * Render the modal as a bottom sheet
   * @default
   */
  isBottomSheet?: boolean;
  /** Footer actions to render with the modal */
  footer?: React.ReactNode;
  /** Content of the modal */
  children: React.ReactNode;
}

export const ModalComponent: React.SFC<ModalProps> = ({
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

// For storybook
export const ModalWrapper: React.SFC<ModalProps> = props => (
  <div>
    <ModalComponent {...props} />
  </div>
);

ModalComponent.defaultProps = {
  footer: undefined,
  isBottomSheet: false,
  hasFixedFooter: false
};

export default ModalComponent;
