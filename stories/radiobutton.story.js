import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';

// eslint-disable-next-line unicorn/import-index
import Radio from '../src/materialize/radioButton';

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

const onClick = e => {
  action('onClick')(e);
  store.set({ isChecked: !store.get('isChecked') });
};
onClick.toString = () => 'onClick';

storiesOf('Form/Radio', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', (...props) => {
    boolean('isChecked', store.get('isChecked'));
    store.subscribe(state => boolean('isChecked', state.isChecked));
    return (
      <Radio
        className="waves-effect waves-light"
        withGap={boolean('withGap')}
        isChecked={boolean('isChecked', false)}
        isDisabled={boolean('isDisabled')}
        onClick={onClick}
      >
        {text('text', 'Radio Text')}
      </Radio>
    );
  });
