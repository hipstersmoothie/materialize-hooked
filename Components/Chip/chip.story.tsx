import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action, createDummyPage, wInfo } from '../utils';

import Chip from '.';

storiesOf('Form/Chip', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Chips can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.'
    )
  })
  .addWithJSX('Basic', () => (
    <Chip
      value={text('value', 'Chip Component')}
      hasClose={boolean('hasClose', false)}
      image={text('image', 'https://materializecss.com/images/yuna.jpg')}
      onClick={action('onClick')}
      onClickClose={action('onClickClose')}
    />
  ))
  .addParameters({
    info: wInfo(
      'To create a tag chip just add a close icon inside with the prop `To create a tag chip just add a close icon inside with the class prop `hasClose`.'
    )
  })
  .addWithJSX('Basic', () => (
    <Chip
      value={text('value', 'Chip Component')}
      hasClose
      onClickClose={action('onClickClose')}
    />
  ));
