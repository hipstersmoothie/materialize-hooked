import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage, wInfo } from '../utils-ts';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Chips from '.';

storiesOf('Form/Chip', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'To add tags, just enter your tag text and press enter. You can delete them by clicking on the close icon or by using your delete button.'
    )
  })
  .add('Input', () => (
    <Chips
      placeholder={text('placeholder', 'Add some tags')}
      secondaryPlaceholder={text('secondaryPlaceholder', 'Anything else?')}
      limit={number('limit', Infinity)}
      onChange={action('onChange')}
    />
  ))
  .add('Input with data', () => (
    <Chips
      data={[
        {
          tag: 'Apple'
        },
        {
          tag: 'Microsoft'
        },
        {
          tag: 'Google'
        }
      ]}
    />
  ))
  .add('Input with autocomplete', () => (
    <Chips
      autocompleteOptions={{
        data: {
          Apple: null,
          Microsoft: null,
          Google: null
        },
        limit: Infinity,
        minLength: 1
      }}
    />
  ));
