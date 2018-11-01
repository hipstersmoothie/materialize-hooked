import * as React from 'react';
import {
  FloatingActionButton,
  FloatingActionButtonOptions
} from 'materialize-css';
import makeClass from 'classnames';

const { useRef, useEffect } = React;

export const useFixedActionButton = (
  ref: React.RefObject<HTMLDivElement>,
  options: FloatingActionButtonOptions
) => {
  useEffect(() => {
    if (ref.current) {
      FloatingActionButton.init(ref.current, options);
    }
  });
};

export interface FabProps extends Partial<FloatingActionButtonOptions> {
  /** Icon for the floating action button */
  icon: string;
  /** ID for the floating action button */
  id?: string;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** Reveal these buttons */
  children?: React.ReactNode;
  /** Called when clicking the floating action button */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Fab: React.SFC<FabProps> = ({
  className,
  id,
  onClick,
  children,
  icon,
  ...options
}) => {
  const fab = useRef<HTMLDivElement>();
  useFixedActionButton(fab, options as FloatingActionButtonOptions);
  const imageClass = makeClass({
    'fixed-action-btn': true,
    toolbar: options.toolbarEnabled
  });

  return (
    <div ref={fab} id={id} className={imageClass}>
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

Fab.defaultProps = {
  id: '',
  className: '',
  children: [],
  onClick: () => undefined
};

export default Fab;
