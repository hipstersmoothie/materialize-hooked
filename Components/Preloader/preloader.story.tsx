import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { createDummyPage } from '../utils-ts';
import { LinearProgress, CircularProgress } from './index';

storiesOf('Components/Preloader', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('LinearProgress', () => (
    <LinearProgress progress={number('progress', 50)} />
  ))
  .add('CircularProgress', () => (
    <CircularProgress
      isLarge={boolean('isLarge', false)}
      isBlue={boolean('isBlue', false)}
      isRed={boolean('isRed', false)}
      isGreen={boolean('isGreen', false)}
      isYellow={boolean('isYellow', false)}
      isSmall={boolean('isSmall', false)}
    />
  ));
