import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

export const CardPanel = ({ className, children }) => (
  <div className={`card-panel ${className}`}>{children}</div>
);

CardPanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardPanel.defaultProps = {
  className: ''
};

const Card = ({
  children,
  className,
  image,
  fab,
  tabs,
  tabContent,
  isHorizontal,
  isSmall,
  isMedium,
  isLarge,
  stickyAction,
  reveal,
  contentClassName,
  isNew,
  title,
  actions
}) => {
  const cardClass = makeClass({
    card: true,
    'sticky-action': stickyAction,
    horizontal: isHorizontal,
    small: isSmall,
    medium: isMedium,
    large: isLarge,
    [className]: className,
    new: isNew
  });
  const contentClass = makeClass({
    'card-content': true,
    [contentClassName]: contentClassName
  });
  const titleComponent = (
    <span className="card-title activator">
      {title}
      {reveal ? <i className="material-icons right">more_vert</i> : null}
    </span>
  );
  const imageWrapperClass = makeClass({
    'card-image': true,
    'waves-effect waves-block waves-light': reveal
  });
  const imageClass = makeClass({
    activator: reveal
  });
  const Wrapper = isHorizontal ? 'div' : React.Fragment;

  return (
    <div className={cardClass}>
      {image && (
        <div className={imageWrapperClass}>
          <img className={imageClass} src={image} />
          {!reveal && titleComponent}
          {fab}
        </div>
      )}

      <Wrapper className={isHorizontal ? 'card-stacked' : ''}>
        <div className={contentClass}>
          {title && (!image || reveal) && titleComponent}
          {children}
        </div>
        {actions && <div className="card-action">{actions}</div>}
        {reveal && <div className="card-reveal">{reveal}</div>}
        {tabs && <div className="card-tabs">{tabs}</div>}
        {tabContent && <div className="card-content">{tabContent}</div>}
      </Wrapper>
    </div>
  );
};

Card.propTypes = {
  isNew: PropTypes.bool,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
  reveal: PropTypes.node,
  title: PropTypes.string,
  image: PropTypes.string,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  fab: PropTypes.node,
  tabs: PropTypes.node,
  tabContent: PropTypes.node,
  isHorizontal: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  stickyAction: PropTypes.bool
};

Card.defaultProps = {
  isNew: false,
  fab: undefined,
  tabs: undefined,
  tabContent: undefined,
  actions: undefined,
  reveal: undefined,
  title: undefined,
  image: undefined,
  isHorizontal: false,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  stickyAction: false,
  contentClassName: '',
  className: ''
};

export default Card;
