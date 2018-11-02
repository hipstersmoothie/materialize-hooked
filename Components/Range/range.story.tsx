import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  array,
  boolean,
  select
} from '@storybook/addon-knobs';

import { createDummyPage, action, wInfo } from '../utils-ts';
import Range from '.';

storiesOf('Form/Range', module)
  .addDecorator(
    createDummyPage({
      width: 800,
      display: 'block',
      margin: 'auto',
      padding: '4rem 0'
    })
  )
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo('Add a range slider for values with a wide range.')
  })
  .add('HTML5 Range', () => (
    <Range
      ariaLabel="Range Input"
      isDisabled={boolean('isDisabled', false)}
      min={number('min', 0)}
      max={number('max', 200)}
      onChange={action('onChange')}
      value={number('value', 50)}
    />
  ))
  .addParameters({
    info: wInfo(
      `
      We have two different types of sliders. nouiSlider is a 3rd party plugin which we've modified. 

      You will have to manually link the \`nouislider.css\`

      See noUiSlider's official documentation [here](https://refreshless.com/nouislider/) to see a variety of slider options
      `
    )
  })
  .add('noUiSlider', () => (
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
      connect={boolean('connect', true)}
      onChange={action('onChange')}
    />
  ));
