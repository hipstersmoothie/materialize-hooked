import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, text, number } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Chips from '../src/materialize/chipInput';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/ChipInput', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Chips
      placeholder={text('placeholder', 'Add some tags')}
      secondaryPlaceholder={text('secondaryPlaceholder', 'Anything else?')}
      limit={number('limit')}
      onChange={action('onChange')}
    />
  ))
  . addWithJSX('with data', () => (
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
  . addWithJSX('with autocomplete', () => (
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
