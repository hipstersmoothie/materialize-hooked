import * as React from 'react';
import {
  FloatingActionButton,
  FloatingActionButtonOptions
} from 'materialize-css';

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
  icon: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
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

Fab.defaultProps = {
  id: '',
  className: '',
  children: [],
  onClick: () => undefined
};

export default Fab;
