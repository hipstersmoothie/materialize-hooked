import * as React from 'react';

export interface BreadcrumbProps {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  value: string;
}
export const Breadcrumb: React.SFC<BreadcrumbProps> = ({ value, onClick }) => (
  <a className="breadcrumb" onClick={onClick}>
    {value}
  </a>
);

export interface BreadcrumbsProps {
  children: React.ReactNode;
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
