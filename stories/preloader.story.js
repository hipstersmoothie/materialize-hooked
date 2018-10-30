import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import { LinearProgress, CircularProgress } from '../src/materialize/preloader';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Components/Preloader', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('LinearProgress', () => (
    <LinearProgress progress={number('progress', undefined)} />
  ))
  . addWithJSX('CircularProgress', () => (
    <CircularProgress
      isLarge={boolean('isLarge')}
      isBlue={boolean('isBlue')}
      isRed={boolean('isRed')}
      isGreen={boolean('isGreen')}
      isYellow={boolean('isYellow')}
      isSmall={boolean('isSmall')}
    />
  ));
