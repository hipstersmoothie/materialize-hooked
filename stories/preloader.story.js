import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import { LinearProgress, CircularProgress } from '../src/materialize/preloader';
import { createDummyPage } from './utils-ts';

storiesOf('Components/Preloader', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('LinearProgress', () => (
    <LinearProgress progress={number('progress', undefined)} />
  ))
  .addWithJSX('CircularProgress', () => (
    <CircularProgress
      isLarge={boolean('isLarge')}
      isBlue={boolean('isBlue')}
      isRed={boolean('isRed')}
      isGreen={boolean('isGreen')}
      isYellow={boolean('isYellow')}
      isSmall={boolean('isSmall')}
    />
  ));
