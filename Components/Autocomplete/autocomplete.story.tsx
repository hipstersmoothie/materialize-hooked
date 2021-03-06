// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action, createDummyPage, wInfo } from '../utils';

import Autocomplete from '.';
import { IChangeElement } from '../Input';

const store = new Store({
  value: 'foo'
});

const onChange = (e: React.ChangeEvent<IChangeElement>) => {
  action('onChange')(e.currentTarget.value);
  store.set({ value: e.currentTarget.value });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Autocomplete', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Add an autocomplete dropdown below your input to suggest possible values in your form. You can populate the list of autocomplete options dynamically as well.'
    )
  })
  .add('Basic', () => (
    <Autocomplete
      id="id"
      ariaLabel="Autocomplete Input"
      placeholder={text('placeholder', null)}
      help={text('help', null)}
      label={text('label', null)}
      icon={text('icon', 'access_time')}
      isDisabled={boolean('isDisabled', false)}
      isInline={boolean('isInline', false)}
      value={store.get('value')}
      data={{
        Apple: null,
        Microsoft: null,
        Google: 'https://placehold.it/250x250'
      }}
      onChange={onChange}
    />
  ));
