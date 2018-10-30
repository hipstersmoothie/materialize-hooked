import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';

import { Input } from '../src/materialize/input';

const store = new Store({
  value: 'foo'
});

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

const onChange = e => {
  action('onChange')(e);
  store.set({ value: e.currentTarget.value });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Input', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Input
      id="input"
      label={text('label', 'Label')}
      value={store.get('value')}
      help={text('help')}
      length={number('length', 10)}
      icon={text('icon', 'account_circle')}
      placeholder={text('placeholder', 'Placeholder')}
      isDisabled={boolean('isDisabled')}
      isSensitive={boolean('isSensitive')}
      isInline={boolean('isInline')}
      isTextArea={boolean('isTextArea')}
      onChange={onChange}
    />
  ))
  .addWithJSX('File Input', () => (
    <Input
      id="input"
      type="file"
      help={text('help')}
      icon={text('icon')}
      placeholder={text('placeholder', 'Placeholder')}
      isDisabled={boolean('isDisabled')}
      isMultiple={boolean('isMultiple')}
      fileButtonText={text('fileButtonText')}
    />
  ));
