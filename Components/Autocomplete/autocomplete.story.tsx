import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from '../utils-ts';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
//@ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';

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
  .addWithJSX('basic', () => (
    <Autocomplete
      id="id"
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
