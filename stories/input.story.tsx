import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from './utils-ts';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';
// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';

import InputComponent, { InputProps } from '../src/materialize/input';

const store = new Store({
  value: 'foo'
});

const Input = (props: InputProps) => <InputComponent {...props} />;
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  action('onChange')(e);
  store.set({ value: e.currentTarget.value });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Input', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(createDummyPage())
  
  .addWithJSX('basic', () => (
    <Input
      id="input"
      label={text('label', 'Label')}
      value={store.get('value')}
      help={text('help', null)}
      length={number('length', 10)}
      icon={text('icon', 'account_circle')}
      placeholder={text('placeholder', 'Placeholder')}
      isDisabled={boolean('isDisabled', false)}
      isSensitive={boolean('isSensitive', false)}
      isInline={boolean('isInline', false)}
      isTextArea={boolean('isTextArea', false)}
      onChange={onChange}
    />
  ))
  .addWithJSX('File Input', () => (
    <Input
      id="input"
      type="file"
      help={text('help', null)}
      icon={text('icon', null)}
      placeholder={text('placeholder', 'Placeholder')}
      isDisabled={boolean('isDisabled', false)}
      isMultiple={boolean('isMultiple', false)}
      fileButtonText={text('fileButtonText', null)}
    />
  ));
