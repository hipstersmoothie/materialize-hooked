import * as React from 'react';
import makeClass from 'classnames';
import { Chips, ChipsOptions } from 'materialize-css';

const { useEffect, useRef } = React;

export const useChips = (
  ref: React.RefObject<HTMLDivElement>,
  options: ChipsOptions
) => {
  useEffect(() => {
    if (ref.current) {
      Chips.init(ref.current, options);
    }
  });
};

export interface ChipsProps extends Partial<ChipsOptions> {
  /** ClassName to attach to the input element */
  inputClassName?: string;
  /** Called when the chip input value changes */
  onChange?: (data: string[]) => void;
  /**
   * A className to attach to the root component
   * @default
   */
  className?: string;
  /** Aria label for the chip input */
  ariaLabel: string;
}

export const ChipsComponent: React.SFC<ChipsProps> = ({
  className,
  inputClassName,
  onChange,
  ariaLabel,
  ...options
}) => {
  const chipInput = useRef<HTMLDivElement>();
  const chipClass = makeClass(className, {
    chips: true
  });

  useChips(chipInput, {
    ...options,
    onChipDelete: function(...args) {
      if (onChange) {
        onChange(args[0][0].M_Chips.chipsData);
      }

      if (options.onChipDelete) {
        options.onChipDelete.call(this, ...args);
      }
    },
    onChipAdd: function(...args) {
      if (onChange) {
        onChange(args[0][0].M_Chips.chipsData);
      }

      if (options.onChipAdd) {
        options.onChipAdd.call(this, ...args);
      }
    }
  } as ChipsOptions);

  return (
    <div ref={chipInput} className={chipClass}>
      <input className={inputClassName} aria-label={ariaLabel} />
    </div>
  );
};

ChipsComponent.defaultProps = {
  className: '',
  onChange: () => undefined,
  inputClassName: undefined
};

export default ChipsComponent;
