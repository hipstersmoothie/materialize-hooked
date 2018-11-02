import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage, wInfo } from '../utils-ts';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';
// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';

import { FileInput, Input } from '.';

const store = new Store({
  value: 'foo'
});

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  action('onChange')(e);
  store.set({ value: e.currentTarget.value });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Input', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(createDummyPage())
  .addParameters({
    info: wInfo(
      `
      Forms are the standard way to receive user inputted data. The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.

      Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing.

      The validate class leverages HTML5 validation and will add a valid and invalid class accordingly.
      `
    )
  })
  .add('Basic', () => (
    <Input
      id="input"
      label={text('label', 'Label')}
      errorText={text('errorText', 'Label')}
      successText={text('successText', 'Label')}
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
  .add('Custom Error or Success Messages', () => (
    <Input
      id="input"
      ariaLabel="Errors and Messages"
      errorText={text('errorText', 'Errorz')}
      successText={text('successText', 'Woo hoo!')}
      value={store.get('value')}
      onChange={onChange}
    />
  ))
  .addParameters({
    info: wInfo(
      `
      Textareas allow larger expandable user input. The border should light up simply and clearly indicating which field the user is currently editing./

      ***Textareas will auto resize to the text inside.***
      `
    )
  })
  .add('Textarea', () => (
    <Input
      isTextArea
      id="input"
      ariaLabel="Text Area Input"
      value={store.get('value')}
      onChange={onChange}
    />
  ))
  .addParameters({
    info: wInfo(
      'If you want to style an input button with a path input we provide this structure.'
    )
  })
  .add('File Input', () => (
    <FileInput
      id="input"
      type="file"
      ariaLabel="File Input"
      help={text('help', null)}
      icon={text('icon', null)}
      placeholder={text('placeholder', 'Placeholder')}
      isDisabled={boolean('isDisabled', false)}
      isMultiple={boolean('isMultiple', false)}
      fileButtonText={text('fileButtonText', 'File')}
    />
  ))
  .addParameters({
    info: wInfo(
      'Use a character counter in fields where a character restriction is in place.'
    )
  })
  .add('Character Counter', () => (
    <Input
      id="input"
      ariaLabel="Character Count Input"
      length={number('length', 10)}
      value={store.get('value')}
      onChange={onChange}
    />
  ));
