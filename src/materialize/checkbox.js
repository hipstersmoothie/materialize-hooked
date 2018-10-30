import React, { useEffect, useRef } from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

const CheckBox = ({
  id,
  children,
  value,
  onChange,
  isChecked,
  isFilledIn,
  isIndeterminate,
  isDisabled
}) => {
  const checkbox = useRef();
  const checkBoxClass = makeClass({
    'filled-in': isFilledIn
  });

  useEffect(() => {
    if (isIndeterminate) {
      checkbox.current.indeterminate = true;
    }
  });

  return (
    <p>
      <label>
        <input
          ref={checkbox}
          id={id}
          type="checkbox"
          className={checkBoxClass}
          disabled={isDisabled ? 'disabled' : undefined}
          checked={isChecked ? 'checked' : undefined}
          onChange={onChange}
        />
        <span>{children || value}</span>
      </label>
    </p>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  isFilledIn: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  isDisabled: PropTypes.bool
};

CheckBox.defaultProps = {
  id: undefined,
  children: undefined,
  value: undefined,
  onChange: () => undefined,
  isChecked: false,
  isFilledIn: false,
  isIndeterminate: false,
  isDisabled: false
};

export default CheckBox;
