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

class Chip extends React.PureComponent<ChipProps> {
  public static defaultProps = {
    onClick: () => undefined,
    onClickClose: () => undefined,
    className: '',
    image: undefined,
    hasClose: false,
    children: undefined
  };

  public onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.props.onClickClose!(e);
  };

  public render() {
    const { className, value, image, children, onClick, hasClose } = this.props;
    const chipClass = makeClass(className, {
      chip: true
    });

    return (
      <div className={chipClass} onClick={onClick}>
        {image && <img src={image} alt="Contact Person" />}
        {value || children}
        {hasClose && (
          <i className="close material-icons" onClick={this.onClick}>
            close
          </i>
        )}
      </div>
    );
  }
}

export default Chip;
