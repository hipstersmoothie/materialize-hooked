import React, { useRef, useEffect } from 'react';
import makeClass from 'classnames';
import noUiSlider from 'nouislider';
import PropTypes from 'prop-types';

// TODO; onchange for fancy
const useFancySlider = (ref, options) => {
  useEffect(() => {
    if (ref.current && ref.current.noUiSlider) {
      ref.current.noUiSlider.updateOptions(options);
    } else if (options.isFancy && !ref.current.noUiSlider) {
      noUiSlider.create(ref.current, options);
    }

    if (ref.current && ref.current.noUiSlider) {
      ref.current.noUiSlider.on('set', options.onChange);

      if (options.isDisabled) {
        ref.current.setAttribute('disabled', true);
      } else {
        ref.current.removeAttribute('disabled');
      }
    }
  });
};

const Range = ({ min, max, step, value, className, isFancy, ...options }) => {
  const slider = useRef();
  useFancySlider(slider, {
    ...options,
    isFancy,
    step,
    range: {
      min,
      max
    }
  });
  const rangeClass = makeClass({
    'range-field': true,
    [className]: className
  });

  if (isFancy) {
    return <div ref={slider} />;
  }

  return (
    <p className={rangeClass}>
      <input
        type="range"
        id="test5"
        style={{ color: options.isDisabled ? 'grey' : undefined }}
        disabled={options.isDisabled}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={options.onChange}
      />
    </p>
  );
};

Range.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  isFancy: PropTypes.bool,
  isDisabled: PropTypes.bool,
  animate: PropTypes.bool,
  className: PropTypes.string,
  step: PropTypes.number,
  margin: PropTypes.number,
  start: PropTypes.arrayOf(PropTypes.number),
  limit: PropTypes.number,
  snap: PropTypes.bool,
  animationDuration: PropTypes.number,
  connect: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.bool),
    PropTypes.bool
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  tooltips: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.func])),
    PropTypes.bool,
    PropTypes.func
  ]),
  direction: PropTypes.oneOf(['rtl', 'ltr']),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  // Move handle on tap, bars are draggable
  behaviour: PropTypes.oneOf([
    'drag',
    'drag-fixed',
    'tap',
    'tap-drag',
    'hover',
    'unconstrained-tap',
    'none'
  ])
};

Range.defaultProps = {
  className: '',
  behaviour: undefined,
  value: undefined,
  isFancy: false,
  isDisabled: false,
  step: 1,
  start: undefined,
  snap: undefined,
  padding: undefined,
  animationDuration: undefined,
  animate: true,
  onChange: () => undefined,
  // ... must be at least 300 apart
  margin: undefined,
  // ... but no more than 600
  limit: undefined,
  // Display colored bars between handles
  connect: true,
  // Put '0' at the bottom of the slider
  direction: 'ltr',
  orientation: 'horizontal',
  tooltips: false
};

export default Range;
