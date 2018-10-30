import * as React from 'react';

export interface BodyProps {
  children: React.ReactNode;
  /** A className to attach to the root component */
  className?: string;
}

export const Body: React.SFC<BodyProps> = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

Body.defaultProps = {
  className: ''
};

export default Body;
