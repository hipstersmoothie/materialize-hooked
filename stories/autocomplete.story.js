import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';

// eslint-disable-next-line unicorn/import-index
import Autocomplete from '../src/materialize/autocomplete';

const store = new Store({
  value: 'foo'
});

const styles = {
  width: '50%',
  margin: 'auto',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

const onChange = e => {
  action('onChange')(e.currentTarget.value);
  store.set({ value: e.currentTarget.value });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Autocomplete', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Autocomplete
      placeholder={text('placeholder')}
      help={text('help')}
      label={text('label')}
      icon={text('icon', 'access_time')}
      isDisabled={boolean('isDisabled')}
      isInline={boolean('isInline')}
      value={store.get('value')}
      data={{
        Apple: null,
        Microsoft: null,
        Google: 'https://placehold.it/250x250'
      }}
      onChange={onChange}
    />
  ));
