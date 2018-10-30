import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

export const CollectionItem = ({
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
  const collectionClass = makeClass({
    'collection-item': true,
    [className]: className,
    active: isActive,
    avatar: icon || image
  });
  const imageClass = makeClass({
    circle: true,
    'material-icons': icon,
    [imageClassName]: imageClassName,
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

CollectionItem.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  secondaryContent: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
  imageClassName: PropTypes.string
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

const Collection = ({ className, header, isLinks, children }) => {
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

Collection.propTypes = {
  isLinks: PropTypes.bool,
  header: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

Collection.defaultProps = {
  isLinks: false,
  header: undefined,
  children: undefined,
  className: ''
};

export default Collection;
