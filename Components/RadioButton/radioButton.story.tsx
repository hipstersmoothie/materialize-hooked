import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from '../utils-ts';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';

import Radio from '.';

const store = new Store({
  isChecked: false
});

const onClick = (e: React.MouseEvent<HTMLElement>) => {
  action('onClick')(e);
  store.set({ isChecked: !store.get('isChecked') });
};
onClick.toString = () => 'onClick';

storiesOf('Form/Radio', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(createDummyPage())
  .addWithJSX('basic', () => {
    boolean('isChecked', store.get('isChecked'));
    store.subscribe((state: { isChecked: boolean }) =>
      boolean('isChecked', state.isChecked)
    );
    return (
      <Radio
        className="waves-effect waves-light"
        withGap={boolean('withGap', false)}
        isChecked={boolean('isChecked', false)}
        isDisabled={boolean('isDisabled', false)}
        onClick={onClick}
      >
        {text('text', 'Radio Text')}
      </Radio>
    );
  });
