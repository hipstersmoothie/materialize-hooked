import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action, createDummyPage, wInfo } from '../utils';

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
      ariaLabel="Chip Input"
      placeholder={text('placeholder', 'Add some tags')}
      secondaryPlaceholder={text('secondaryPlaceholder', 'Anything else?')}
      limit={number('limit', Infinity)}
      onChange={action('onChange')}
    />
  ))
  .add('Input with data', () => (
    <Chips
      ariaLabel="Chip Input"
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
      ariaLabel="Chip Input"
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
