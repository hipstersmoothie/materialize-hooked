import * as React from 'react';
import makeClass from 'classnames';

import { getVisiblePages } from 'bulma-pagination-react';

export interface ArrowProps {
  /** Direction of the arrow */
  direction: 'left' | 'right';
  /** Called when arrow is clicked */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /**
   * Disable the arrow button
   * @default false
   */
  isDisabled?: boolean;
}

const Arrow: React.SFC<ArrowProps> = ({ direction, isDisabled, onClick }) => (
  <li className={`waves-effect ${isDisabled && 'disabled'}`}>
    <a onClick={onClick}>
      <i className="material-icons">{`chevron_${direction}`}</i>
    </a>
  </li>
);

Arrow.defaultProps = {
  onClick: () => undefined,
  isDisabled: false
};

const Ellipses: React.SFC = () => (
  <li className="disabled">
    <a>
      <i className="material-icons">more_horiz</i>
    </a>
  </li>
);

export interface PageProps {
  /** Called when the page number is clicked */
  onClick: (newPage: number) => void;
  /** Number for the page to display */
  number: number;
  /** Current page of the pagination component */
  currentPage: number;
}

const Page: React.SFC<PageProps> = ({ number, currentPage, onClick }) => (
  <li className={`waves-effect ${number === currentPage && 'active'}`}>
    <a onClick={() => onClick(number)}>{number}</a>
  </li>
);

Page.defaultProps = {
  onClick: () => undefined
};

export interface PaginationProps {
  /** Called when a page number is clicked */
  onChange?: (newPage: number) => void;
  /**
   * How many pages to show around the current page.
   * @default false
   */
  visibleRadius?: number;
  /** The page in the component that should display as active */
  currentPage: number;
  /** The total number of pages the component should display */
  pages: number;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
}

const Pagination: React.SFC<PaginationProps> = ({
  className,
  onChange,
  visibleRadius,
  currentPage,
  pages
}) => {
  const visiblePages = getVisiblePages(visibleRadius!, currentPage, pages);
  const paginationClass = makeClass(className, {
    pagination: true
  });
  const pagesComponents: React.ReactNode[] = [];

  if (visiblePages[0] >= 2) {
    pagesComponents.push(
      <Page
        key="page-1"
        number={1}
        currentPage={currentPage}
        onClick={onChange!}
      />
    );

    if (visiblePages[0] !== 2) {
      pagesComponents.push(<Ellipses key="ellipses-1" />);
    }
  }

  visiblePages.map(page =>
    pagesComponents.push(
      <Page
        key={`page-${page}`}
        number={page}
        currentPage={currentPage}
        onClick={onChange!}
      />
    )
  );

  if (
    currentPage <= pages - visibleRadius! - 1 &&
    visiblePages.length < pages
  ) {
    if (currentPage < pages - visibleRadius! - 1) {
      pagesComponents.push(<Ellipses key="ellipses-2" />);
    }

    pagesComponents.push(
      <Page
        key={`page-${pages}`}
        number={pages}
        currentPage={currentPage}
        onClick={onChange!}
      />
    );
  }

  return (
    <ul className={paginationClass}>
      <Arrow
        isDisabled={currentPage === 1}
        direction="left"
        onClick={() => onChange!(currentPage - 1)}
      />
      {pagesComponents}
      <Arrow
        isDisabled={currentPage === pages}
        direction="right"
        onClick={() => onChange!(currentPage + 1)}
      />
    </ul>
  );
};

Pagination.defaultProps = {
  onChange: () => undefined,
  visibleRadius: 2,
  className: ''
};

export default Pagination;
