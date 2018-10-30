import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

const Switch = ({ on, off, className, isDisabled, isChecked, onChange }) => {
  const switchClass = makeClass({
    switch: true,
    [className]: className
  });

  return (
    <div className={switchClass}>
      <label>
        {off}
        <input
          disabled={isDisabled}
          checked={isChecked}
          type="checkbox"
          onChange={onChange}
        />
        <span className="lever" />
        {on}
      </label>
    </div>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  on: PropTypes.string,
  off: PropTypes.string,
  className: PropTypes.string
};

Switch.defaultProps = {
  on: 'On',
  off: 'Off',
  className: '',
  isDisabled: false,
  isChecked: false,
  onChange: () => undefined
};

export default Switch;
