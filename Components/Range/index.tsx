import * as React from 'react';
import makeClass from 'classnames';
import * as noUiSlider from 'nouislider';

const { useRef, useEffect } = React;

const useFancySlider = (
  ref: React.RefObject<noUiSlider.Instance>,
  options: RangeProps
) => {
  useEffect(() => {
    if (ref.current) {
      if (ref.current.noUiSlider) {
        ref.current.noUiSlider.updateOptions(options as noUiSlider.Options);
      } else if (options.isFancy) {
        noUiSlider.create(ref.current, options as noUiSlider.Options);
      }

      if (ref.current.noUiSlider) {
        ref.current.noUiSlider.on(
          'set',
          options.onChange as noUiSlider.Callback
        );

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

export interface RangeProps extends Partial<noUiSlider.Options> {
  /** Called when the value of the range changes */
  onChange?: HTMLChangeEvent | noUiSlider.Callback;
  /** The value of the slider */
  value?: number;
  /** The min value of the slider */
  min: number;
  /** The max value of the slider */
  max: number;
  /** The value of each step of the slider */
  step?: number;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /**
   * Range is disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Use the noUISlider
   * @default false
   */
  isFancy?: boolean;
}

export const Range: React.SFC<RangeProps> = props => {
  const { min, max, step, value, className, isFancy } = props;
  const slider = useRef<HTMLDivElement & noUiSlider.Instance>();
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
