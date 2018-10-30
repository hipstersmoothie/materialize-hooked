import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

const Chip = ({
  className,
  value,
  image,
  children,
  onClick,
  hasClose,
  onClickClose
}) => {
  const chipClass = makeClass({
    chip: true,
    [className]: className
  });

  return (
    <div className={chipClass} onClick={onClick}>
      {image && <img src={image} alt="Contact Person" />}
      {value || children}
      {hasClose && (
        <i
          className="close material-icons"
          onClick={e => {
            e.stopPropagation();
            onClickClose(e);
          }}
        >
          close
        </i>
      )}
    </div>
  );
};

Chip.propTypes = {
  onClick: PropTypes.func,
  onClickClose: PropTypes.func,
  value: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
  hasClose: PropTypes.bool,
  className: PropTypes.string
};

Chip.defaultProps = {
  onClick: () => undefined,
  onClickClose: () => undefined,
  className: '',
  value: undefined,
  image: undefined,
  hasClose: false,
  children: undefined
};

export default Chip;
