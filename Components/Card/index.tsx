import * as React from 'react';
import makeClass from 'classnames';

export interface CardPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const CardPanel: React.SFC<CardPanelProps> = ({
  className,
  children
}) => <div className={`card-panel ${className}`}>{children}</div>;

CardPanel.defaultProps = {
  className: ''
};

export interface CardProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
  reveal?: React.ReactNode;
  title?: string;
  image?: string;
  contentClassName?: string;
  className?: string;
  fab?: React.ReactNode;
  tabs?: React.ReactNode;
  tabContent?: React.ReactNode;
  isNew?: boolean;
  isHorizontal?: boolean;
  isSmall?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  stickyAction?: boolean;
}

const Card: React.SFC<CardProps> = ({
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
  const cardClass = makeClass(className, {
    card: true,
    'sticky-action': stickyAction,
    horizontal: isHorizontal,
    small: isSmall,
    medium: isMedium,
    large: isLarge,
    new: isNew
  });
  const contentClass = makeClass(contentClassName, {
    'card-content': true
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
  const Wrapper = React.Fragment;

  return (
    <div className={cardClass}>
      {image && (
        <div className={imageWrapperClass}>
          <img className={imageClass} src={image} />
          {!reveal && titleComponent}
          {fab}
        </div>
      )}

      <Wrapper>
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
