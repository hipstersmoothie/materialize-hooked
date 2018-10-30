import * as React from 'react';

export interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body = ({ children, className = '' }: BodyProps) => (
  <div className={`container ${className}`}>{children}</div>
);

export default Body;
