import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

const RadioButton = ({
  value,
  children,
  withGap,
  onClick,
  className,
  isChecked,
  isDisabled
}) => {
  const radioClass = makeClass({
    'with-gap': withGap,
    [className]: className
  });
  const disabled = isDisabled ? 'disabled' : undefined;

  return (
    <p>
      <label>
        <input
          className={radioClass}
          checked={isChecked}
          disabled={disabled}
          name="group1"
          type="radio"
          onClick={onClick}
        />
        <span>{value || children}</span>
      </label>
    </p>
  );
};

RadioButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.string,
  withGap: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string
};

RadioButton.defaultProps = {
  onClick: () => undefined,
  children: undefined,
  withGap: false,
  isChecked: undefined,
  isDisabled: false,
  className: ''
};

export default RadioButton;
