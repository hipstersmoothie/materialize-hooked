import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from '../utils-ts';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Chips from '.';

storiesOf('Form/ChipInput', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Chips
      placeholder={text('placeholder', 'Add some tags')}
      secondaryPlaceholder={text('secondaryPlaceholder', 'Anything else?')}
      limit={number('limit', Infinity)}
      onChange={action('onChange')}
    />
  ))
  .add('with data', () => (
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
  .add('with autocomplete', () => (
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
