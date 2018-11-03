import makeClass from 'classnames';
import * as React from 'react';

type ClickCallback = (event: React.MouseEvent<HTMLElement>) => void;

export interface ChipProps {
  /** Callback for when the chip is clicked */
  onClick?: ClickCallback;
  /** Callback for when close chip is clicked */
  onClickClose?: ClickCallback;
  /** Text inside chip */
  value: string;
  /** Image to display with chip */
  image?: string;
  children?: React.ReactNode;
  /** Whether the chip should display the close button */
  hasClose?: boolean;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

export const Chip: React.SFC<ChipProps> = ({
  className,
  value,
  image,
  children,
  onClick,
  hasClose,
  onClickClose
}) => {
  const chipClass = makeClass(className, {
    chip: true
  });

  return (
    <div className={chipClass} onClick={onClick}>
      {image && <img src={image} alt="Contact Person" />}
      {value || children}
      {hasClose && (
        <i
          className="close material-icons"
          onClick={e => {
            e.stopPropagation();
            onClickClose!(e);
          }}
        >
          close
        </i>
      )}
    </div>
  );
};

Chip.defaultProps = {
  onClick: () => undefined,
  onClickClose: () => undefined,
  className: '',
  image: undefined,
  hasClose: false,
  children: undefined
};

export default Chip;
