import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { createDummyPage, wInfo } from '../utils-ts';
import { LinearProgress, CircularProgress } from './index';

storiesOf('Components/Preloader', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'If you have content that will take a long time to load, you should give the user feedback.\n\n\nTo get an indeterminate progress bar, do not provide a progress value.'
    )
  })
  .addWithJSX('Linear', () => (
    <LinearProgress progress={number('progress', 35)} />
  ))
  .addParameters({
    info: wInfo(
      'There are 4 colors and 3 sizes of circular spinners. If no colors are provided the spinner will cycle through the colors.'
    )
  })
  .addWithJSX('Circular', () => (
    <CircularProgress
      isBlue={boolean('isBlue', false)}
      isRed={boolean('isRed', false)}
      isGreen={boolean('isGreen', false)}
      isYellow={boolean('isYellow', false)}
      isSmall={boolean('isSmall', false)}
      isLarge={boolean('isLarge', false)}
    />
  ));
