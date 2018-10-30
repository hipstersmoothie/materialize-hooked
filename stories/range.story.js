import React from 'react';
import { action } from './utils';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  array,
  boolean,
  select
} from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Range from '../src/materialize/range';

const styles = {
  width: '100%',
  height: '400px',
  padding: '10rem 100px'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/Range', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Range
      isDisabled={boolean('isDisabled')}
      min={number('min', 0)}
      max={number('max', 200)}
      onChange={action('onChange')}
    />
  ))
  .addWithJSX('fancy', () => (
    <Range
      isFancy
      isDisabled={boolean('isDisabled')}
      start={array('start', [100, 400])}
      animate={boolean('animate', true)}
      direction={select('direction', { rtl: 'rtl', ltr: 'ltr' }, 'ltr')}
      orientation={select(
        'orientation',
        { vertical: 'vertical', horizontal: 'horizontal' },
        'horizontal'
      )}
      behaviour={select(
        'behaviour',
        {
          drag: 'drag',
          'drag-fixed': 'drag-fixed',
          tap: 'tap',
          'tap-drag': 'tap-drag',
          hover: 'hover',
          'unconstrained-tap': 'unconstrained-tap',
          none: 'none'
        },
        undefined
      )}
      tooltips={boolean('tooltips', true)}
      animationDuration={number('animationDuration')}
      snap={boolean('snap')}
      min={number('min', 0)}
      max={number('max', 400)}
      step={number('step', 1)}
      limit={number('limit')}
      onChange={action('onChange')}
    />
  ));
