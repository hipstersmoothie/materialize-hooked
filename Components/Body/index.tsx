import * as React from 'react';

export const Divider: React.SFC = () => <div className="divider" />;

export interface BodyProps {
  /** The content of the body */
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
