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
  inputClassName?: string;
  onChange?: (data: string[]) => void;
  className?: string;
}

export const ChipsComponent: React.SFC<ChipsProps> = ({
  className,
  inputClassName,
  onChange,
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
      <input className={inputClassName} />
    </div>
  );
};

ChipsComponent.defaultProps = {
  className: '',
  onChange: () => undefined,
  inputClassName: undefined
};

export default ChipsComponent;
