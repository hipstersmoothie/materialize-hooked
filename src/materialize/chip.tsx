import * as React from 'react';
import makeClass from 'classnames';

type ClickCallback = (event: React.MouseEvent<HTMLElement>) => void;

export interface ChipProps {
  onClick?: ClickCallback;
  onClickClose?: ClickCallback;
  value?: string;
  image?: string;
  children?: React.ReactNode;
  hasClose?: boolean;
  className?: string;
}

const defaultProps = {
  onClick: () => undefined,
  onClickClose: () => undefined,
  className: '',
  value: undefined,
  image: undefined,
  hasClose: false,
  children: undefined
} as ChipProps;

const Chip = (props: ChipProps) => {
  const {
    className,
    value,
    image,
    children,
    onClick,
    hasClose,
    onClickClose
  } = { ...defaultProps, ...props };

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

export default Chip;
