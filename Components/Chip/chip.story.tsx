import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from '../utils-ts';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Chip from '.';

storiesOf('Form/Chip', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Chip
      value={text('value', 'Chip Component')}
      hasClose={boolean('hasClose', false)}
      image={text('image', 'https://materializecss.com/images/yuna.jpg')}
      onClick={action('onClick')}
      onClickClose={action('onClickClose')}
    />
  ));
