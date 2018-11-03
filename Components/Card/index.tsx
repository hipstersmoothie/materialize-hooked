import makeClass from 'classnames';
import * as React from 'react';

export interface CardPanelProps {
  /** Content of the card */
  children: React.ReactNode;
  /**
   * A className to attach to the root component
   * @default
   */
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
  /** The body of the card */
  children: React.ReactNode;
  /** Actions to display with the card */
  actions?: React.ReactNode;
  /** Secondary content to reveal. */
  reveal?: React.ReactNode;
  /** Title to display for the card */
  title?: string;
  /** Image to display with the card */
  image?: string;
  /**
   * A className to attach to the content div
   * @default
   */
  contentClassName?: string;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** Floating Action Button Component to use with the card */
  fab?: React.ReactNode;
  /**
   * The FAB button for the card is large.
   * @default false
   */
  hasLargeFab?: boolean;
  /** tabs to display at the bottom of a card */
  tabs?: React.ReactNode;
  /** Content for the tabs to reveal */
  tabContent?: React.ReactNode;
  /** Alt text for image */
  imageDescription?: string;
  /**
   * Render the card horizontally
   * @default false
   */
  isHorizontal?: boolean;
  /**
   * Render a small card
   * @default false
   */
  isSmall?: boolean;
  /**
   * Render a medium card
   * @default false
   */
  isMedium?: boolean;
  /**
   * Render a large card
   * @default false
   */
  isLarge?: boolean;
  /**
   * When reveal is set, stick the actions to the bottom
   * @default false
   */
  stickyAction?: boolean;
}

const Card: React.SFC<CardProps> = ({
  children,
  className,
  image,
  imageDescription,
  fab,
  hasLargeFab,
  tabs,
  tabContent,
  isHorizontal,
  isSmall,
  isMedium,
  isLarge,
  stickyAction,
  reveal,
  contentClassName,
  title,
  actions
}) => {
  const cardClass = makeClass(className, {
    card: true,
    'sticky-action': stickyAction,
    horizontal: isHorizontal,
    small: isSmall,
    medium: isMedium,
    large: isLarge
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
  const Wrapper = isHorizontal
    ? (props: { children: React.ReactNode }) => (
        <div className="card-stacked">{props.children}</div>
      )
    : React.Fragment;

  return (
    <div className={cardClass}>
      {image && (
        <div className={imageWrapperClass}>
          <img
            className={imageClass}
            src={image}
            alt={imageDescription || 'Image for Card'}
          />
          {!reveal && !hasLargeFab && titleComponent}
          {fab}
        </div>
      )}

      <Wrapper>
        <div className={contentClass}>
          {title && (!image || reveal || hasLargeFab) && titleComponent}
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
  hasLargeFab: false,
  stickyAction: false,
  contentClassName: '',
  className: ''
};

export default Card;
