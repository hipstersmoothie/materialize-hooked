import * as React from 'react';

export interface BreadcrumbProps {
  /** Text value of the breadcrumb */
  value: string;
  /** Will be called when the breadcrumb is clicked */
  onClick(event: React.MouseEvent<HTMLAnchorElement>): void;
}
export const Breadcrumb: React.SFC<BreadcrumbProps> = ({ value, onClick }) => (
  <a className="breadcrumb" onClick={onClick}>
    {value}
  </a>
);

export interface BreadcrumbsProps {
  /** Breadcrumb components to display */
  children: React.ReactNode;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

export const Breadcrumbs: React.SFC<BreadcrumbsProps> = ({
  className,
  children
}) => (
  <nav className={className}>
    <div className="nav-wrapper">
      <div className="col s12">{children}</div>
    </div>
  </nav>
);

Breadcrumbs.defaultProps = {
  className: ''
};

export default Breadcrumbs;
