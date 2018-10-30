import React, { useEffect, useRef } from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import { Chips } from 'materialize-css';

export const useChips = (ref, options) => {
  useEffect(() => {
    Chips.init(ref.current, options);
  });
};

const ChipsComponent = ({
  className,
  inputClassName,
  onChange,
  ...options
}) => {
  const chipInput = useRef();
  const chipClass = makeClass({
    chips: true,
    [className]: className
  });

  useChips(chipInput, {
    ...options,
    onChipDelete: (...args) => {
      onChange(args[0][0].M_Chips.chipsData);
      options.onChipDelete(...args);
    },
    onChipAdd: (...args) => {
      onChange(args[0][0].M_Chips.chipsData);
      options.onChipAdd(...args);
    }
  });

  return (
    <div ref={chipInput} className={chipClass}>
      <input className={inputClassName} />
    </div>
  );
};

ChipsComponent.propTypes = {
  inputClassName: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  data: PropTypes.array,
  placeholder: PropTypes.string,
  secondaryPlaceholder: PropTypes.string,
  autocompleteOptions: PropTypes.object,
  limit: PropTypes.number,
  onChipAdd: PropTypes.func,
  onChipSelect: PropTypes.func,
  onChipDelete: PropTypes.func
};

ChipsComponent.defaultProps = {
  className: '',
  onChange: () => undefined,
  inputClassName: undefined,
  data: [],
  placeholder: '',
  secondaryPlaceholder: '',
  autocompleteOptions: {},
  limit: Infinity,
  onChipAdd: () => undefined,
  onChipSelect: () => undefined,
  onChipDelete: () => undefined
};

export default ChipsComponent;
