import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';

// eslint-disable-next-line unicorn/import-index
import Switch from '../src/materialize/switch';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

const store = new Store({
  isChecked: false
});

const onChange = e => {
  action('onChange')(e);
  store.set({ isChecked: !store.get('isChecked') });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Switch', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => {
    boolean('isChecked', store.get('isChecked'));
    store.subscribe(state => boolean('isChecked', state.isChecked));

    return (
      <Switch
        isDisabled={boolean('isDisabled')}
        on={text('on')}
        off={text('off')}
        onChange={onChange}
      />
    );
  });
