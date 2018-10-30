import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

import { getVisiblePages } from 'bulma-pagination-react';

const Arrow = ({ direction, isDisabled, onClick }) => (
  <li className={`waves-effect ${isDisabled && 'disabled'}`}>
    <a onClick={onClick}>
      <i className="material-icons">{`chevron_${direction}`}</i>
    </a>
  </li>
);

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
};

Arrow.defaultProps = {
  onClick: () => undefined,
  isDisabled: false
};

const Ellipses = () => (
  <li className="disabled">
    <a>
      <i className="material-icons">more_horiz</i>
    </a>
  </li>
);

const Page = ({ number, currentPage, onClick }) => (
  <li className={`waves-effect ${number === currentPage && 'active'}`}>
    <a onClick={() => onClick(number)}>{number}</a>
  </li>
);

Page.propTypes = {
  onClick: PropTypes.func,
  number: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

Page.defaultProps = {
  onClick: () => undefined
};

const Pagination = ({
  className,
  onChange,
  visibleRadius,
  currentPage,
  pages
}) => {
  const visiblePages = getVisiblePages(visibleRadius, currentPage, pages);
  const paginationClass = makeClass({
    pagination: true,
    [className]: className
  });
  const pagesComponents = [];

  if (visiblePages[0] >= 2) {
    pagesComponents.push(
      <Page
        key="page-1"
        number={1}
        currentPage={currentPage}
        onClick={onChange}
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
        onClick={onChange}
      />
    )
  );

  if (currentPage <= pages - visibleRadius - 1 && visiblePages.length < pages) {
    if (currentPage < pages - visibleRadius - 1) {
      pagesComponents.push(<Ellipses key="ellipses-2" />);
    }

    pagesComponents.push(
      <Page
        key={`page-${pages}`}
        number={pages}
        currentPage={currentPage}
        onClick={onChange}
      />
    );
  }

  return (
    <ul className={paginationClass}>
      <Arrow
        isDisabled={currentPage === 1}
        direction="left"
        onClick={() => onChange(currentPage - 1)}
      />
      {pagesComponents}
      <Arrow
        isDisabled={currentPage === pages}
        direction="right"
        onClick={() => onChange(currentPage + 1)}
      />
    </ul>
  );
};

Pagination.propTypes = {
  onChange: PropTypes.func,
  visibleRadius: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  className: PropTypes.string
};

Pagination.defaultProps = {
  onChange: () => undefined,
  visibleRadius: 2,
  className: ''
};

export default Pagination;
