import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  array,
  boolean,
  select
} from '@storybook/addon-knobs';

import { createDummyPage, action } from '../../../stories/utils-ts';
import Range from '.';

storiesOf('Form/Range', module)
  .addDecorator(
    createDummyPage({
      width: '100%',
      height: '400px',
      padding: '10rem 100px'
    })
  )
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Range
      isDisabled={boolean('isDisabled', false)}
      min={number('min', 0)}
      max={number('max', 200)}
      onChange={action('onChange')}
      value={number('value', 50)}
    />
  ))
  .add('fancy', () => (
    <Range
      isFancy
      isDisabled={boolean('isDisabled', false)}
      start={array('start', [100, 400])}
      animate={boolean('animate', true)}
      direction={select('direction', { rtl: 'rtl', ltr: 'ltr' }, 'ltr')}
      orientation={select(
        'orientation',
        { vertical: 'vertical', horizontal: 'horizontal' },
        'horizontal'
      )}
      behaviour={select<string>(
        'behaviour',
        [
          'drag',
          'drag-fixed',
          'tap',
          'tap-drag',
          'hover',
          'unconstrained-tap',
          'none'
        ],
        'drag'
      )}
      tooltips={boolean('tooltips', true)}
      animationDuration={number('animationDuration', 300)}
      snap={boolean('snap', false)}
      min={number('min', 0)}
      max={number('max', 400)}
      step={number('step', 1)}
      limit={number('limit', 0)}
      onChange={action('onChange')}
    />
  ));
