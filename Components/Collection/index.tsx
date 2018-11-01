import * as React from 'react';
import makeClass from 'classnames';

export interface CollectionItemProps {
  /** HREF for the item if in link list */
  href?: string;
  /** Content of the item */
  children: string | React.ReactNode;
  /**
   * Whether the collection item is styled as active
   * @default false
   */
  isActive?: boolean;
  /** Called when clicking the item */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Extra info to display with the item, usually an icon */
  secondaryContent?: React.ReactNode;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** Image to display with the item */
  image?: string;
  /** Icon to display with icon. only image or icon is used */
  icon?: string;
  /**
   * A className to attach to the image/icon component
   * @default
   */
  imageClassName?: string;
}

export const CollectionItem: React.SFC<CollectionItemProps> = ({
  href,
  children,
  image,
  icon,
  imageClassName,
  onClick,
  isActive,
  secondaryContent,
  className
}) => {
  const ItemElement = href ? 'a' : 'li';
  const collectionClass = makeClass(className, {
    'collection-item': true,
    active: isActive,
    avatar: icon || image
  });
  const imageClass = makeClass(imageClassName, {
    circle: true,
    'material-icons': icon,
    active: isActive
  });
  let imageComponent;

  if (image) {
    imageComponent = <img src={image} alt="" className={imageClass} />;
  } else if (icon) {
    imageComponent = <i className={imageClass}>{icon}</i>;
  }

  return (
    <ItemElement className={collectionClass} onClick={onClick}>
      {imageComponent}
      {children}
      {secondaryContent}
    </ItemElement>
  );
};

CollectionItem.defaultProps = {
  href: undefined,
  isActive: false,
  onClick: undefined,
  secondaryContent: undefined,
  className: '',
  image: undefined,
  icon: undefined,
  imageClassName: undefined
};

export interface CollectionProps {
  isLinks?: boolean;
  header?: string;
  children?: React.ReactNode;
  className?: string;
}

const Collection: React.SFC<Collection> = ({
  className,
  header,
  isLinks,
  children
}) => {
  const WrapperElement = isLinks ? 'div' : 'ul';
  const HeaderElement = isLinks ? 'div' : 'li';
  const collectionClass = makeClass({
    collection: true,
    [className]: className,
    'with-header': header
  });

  return (
    <WrapperElement className={collectionClass}>
      {header && (
        <HeaderElement className="collection-header">
          <h4>{header}</h4>
        </HeaderElement>
      )}
      {children}
    </WrapperElement>
  );
};

Collection.defaultProps = {
  isLinks: false,
  header: undefined,
  children: undefined,
  className: ''
};

export default Collection;
