import React from 'react';
import makeClass from 'classnames';
import PropTypes from 'prop-types';

export const LinearProgress = ({ className, progress }) => {
  const linearClass = makeClass({
    progress: true,
    [className]: className
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

LinearProgress.propTypes = {
  progress: PropTypes.number,
  className: PropTypes.string
};

LinearProgress.defaultProps = {
  progress: undefined,
  className: ''
};

const CircularProgressPart = ({ className }) => (
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

CircularProgressPart.propTypes = {
  className: PropTypes.string
};

CircularProgressPart.defaultProps = {
  className: ''
};

export const CircularProgress = ({
  className,
  isLarge,
  isBlue,
  isRed,
  isGreen,
  isYellow,
  isSmall
}) => {
  const wrapperClass = makeClass({
    'preloader-wrapper': true,
    active: true,
    [className]: className,
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

CircularProgress.propTypes = {
  isLarge: PropTypes.bool,
  isBlue: PropTypes.bool,
  isRed: PropTypes.bool,
  isGreen: PropTypes.bool,
  isYellow: PropTypes.bool,
  isSmall: PropTypes.bool,
  className: PropTypes.string
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
