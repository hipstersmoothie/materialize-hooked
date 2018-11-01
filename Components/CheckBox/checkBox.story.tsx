import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from '../utils-ts';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';

import CheckBox from '.';

const store = new Store({
  isChecked: false
});

const onChange = (e: React.ChangeEvent<HTMLElement>) => {
  action('onChange')(e);
  store.set({ isChecked: !store.get('isChecked') });
};
onChange.toString = () => 'onChange';

storiesOf('Form/CheckBox', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => {
    boolean('isChecked', store.get('isChecked'));
    store.subscribe((state: { isChecked: boolean }) =>
      boolean('isChecked', state.isChecked)
    );

    return (
      <CheckBox
        isChecked={boolean('isChecked', false)}
        isDisabled={boolean('isDisabled', false)}
        isFilledIn={boolean('isFilledIn', false)}
        isIndeterminate={boolean('isIndeterminate', false)}
        onChange={onChange}
        value={text('value', 'Checkbox')}
      />
    );
  });
