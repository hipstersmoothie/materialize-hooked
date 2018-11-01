import * as React from 'react';
import makeClass from 'classnames';
import noUiSlider, { Options, Instance, Callback } from 'nouislider';

const { useRef, useEffect } = React;

const useFancySlider = (
  ref: React.RefObject<Instance>,
  options: RangeProps
) => {
  useEffect(() => {
    if (ref.current) {
      if (ref.current.noUiSlider) {
        ref.current.noUiSlider.updateOptions(options as Options);
      } else if (options.isFancy) {
        noUiSlider.create(ref.current, options as Options);
      }

      if (ref.current.noUiSlider) {
        ref.current.noUiSlider.on('set', options.onChange as Callback);

        if (options.isDisabled) {
          ref.current.setAttribute('disabled', 'true');
        } else {
          ref.current.removeAttribute('disabled');
        }
      }
    }
  });
};

type HTMLChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

export interface RangeProps extends Partial<Options> {
  onChange?: HTMLChangeEvent | Callback;
  value?: number;
  min: number;
  max: number;
  step?: number;
  className?: string;
  isDisabled?: boolean;
  isFancy?: boolean;
}

export const Range: React.SFC<RangeProps> = props => {
  const { min, max, step, value, className, isFancy } = props;
  const slider = useRef<HTMLDivElement & Instance>();
  useFancySlider(slider, {
    ...props,
    isFancy,
    step,
    range: {
      min,
      max
    }
  });
  const rangeClass = makeClass(className, {
    'range-field': true
  });

  if (isFancy) {
    return <div ref={slider} />;
  }

  return (
    <p className={rangeClass}>
      <input
        type="range"
        id="test5"
        style={{ color: props.isDisabled ? 'grey' : undefined }}
        disabled={props.isDisabled}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={props.onChange as HTMLChangeEvent}
      />
    </p>
  );
};

Range.defaultProps = {
  onChange: () => undefined,
  className: '',
  value: undefined,
  isFancy: false,
  isDisabled: false,
  step: 1
};

export default Range;
