import * as React from 'react';
import makeClass from 'classnames';

export interface LinearProgressProps {
  progress?: number;
  className?: string;
}

export const LinearProgress: React.SFC<LinearProgressProps> = ({
  className,
  progress
}) => {
  const linearClass = makeClass(className, {
    progress: true
  });

  return (
    <div className={linearClass}>
      <div
        className={progress ? 'determinate' : 'indeterminate'}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

LinearProgress.defaultProps = {
  progress: undefined,
  className: ''
};

export interface CircularProgressPartProps {
  className?: string;
}

const CircularProgressPart: React.SFC<CircularProgressPartProps> = ({
  className
}) => (
  <div className={className}>
    <div className="circle-clipper left">
      <div className="circle" />
    </div>
    <div className="gap-patch">
      <div className="circle" />
    </div>
    <div className="circle-clipper right">
      <div className="circle" />
    </div>
  </div>
);

CircularProgressPart.defaultProps = {
  className: ''
};

export interface CircularProgressProps {
  isLarge?: boolean;
  isBlue?: boolean;
  isRed?: boolean;
  isGreen?: boolean;
  isYellow?: boolean;
  isSmall?: boolean;
  className?: string;
}

export const CircularProgress: React.SFC<CircularProgressProps> = ({
  className,
  isLarge,
  isBlue,
  isRed,
  isGreen,
  isYellow,
  isSmall
}) => {
  const wrapperClass = makeClass(className, {
    'preloader-wrapper': true,
    active: true,
    small: isSmall,
    big: isLarge
  });
  const spinnerClass = makeClass({
    'spinner-layer': true,
    'spinner-blue-only': isBlue,
    'spinner-red-only': isRed,
    'spinner-green-only': isGreen,
    'spinner-yellow-only': isYellow
  });

  let spinnerComponent;

  if (isBlue || isGreen || isRed || isYellow) {
    spinnerComponent = <CircularProgressPart className={spinnerClass} />;
  } else {
    spinnerComponent = (
      <React.Fragment>
        {['red', 'blue', 'green', 'yellow'].map(color => (
          <CircularProgressPart
            key={color}
            className={`spinner-layer spinner-${color}`}
          />
        ))}
      </React.Fragment>
    );
  }

  return <div className={wrapperClass}>{spinnerComponent}</div>;
};

CircularProgress.defaultProps = {
  isLarge: false,
  isBlue: false,
  isRed: false,
  isGreen: false,
  isYellow: false,
  isSmall: false,
  className: ''
};
