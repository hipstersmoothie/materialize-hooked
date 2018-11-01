import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, select } from '@storybook/addon-knobs';

import { createDummyPage } from '../utils-ts';
import Tooltip from '.';

const positions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

storiesOf('Javascript/Tooltip', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Tooltip
      className="waves-effect waves-light"
      position={select('position', positions, 'top')}
      text={text('text', 'Tooltip Text')}
      exitDelay={number('exitDelay', 0)}
      enterDelay={number('enterDelay', 200)}
      html={text('html', null)}
      margin={number('margin', 5)}
      inDuration={number('inDuration', 300)}
      outDuration={number('outDuration', 250)}
      transitionMovement={number('transitionMovement', 10)}
    >
      Hover me!
    </Tooltip>
  ));
