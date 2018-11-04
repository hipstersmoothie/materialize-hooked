import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createDummyPage, wInfo } from '../utils';

import ScaleTransition from '.';
import Button from '../Button/index';

storiesOf('CSS/Transition', module)
  .addDecorator(createDummyPage())
  .addParameters({
    info: wInfo('Use this scale in and out elements.', [Button])
  })
  .add('Scale In', () => (
    <ScaleTransition>
      <Button text="Hey there!" />
    </ScaleTransition>
  ))
  .add('Scale Out', () => (
    <ScaleTransition scaleIn={false}>
      <Button text="See ya!" />
    </ScaleTransition>
  ));
