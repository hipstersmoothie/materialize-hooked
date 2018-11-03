// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action, createDummyPage, wInfo } from '../utils';

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
  .addParameters({
    info: wInfo(
      'Radio Buttons are used when the user must make only one selection out of a group of items.'
    )
  })
  .add('Basic', () => {
    boolean('isChecked', store.get('isChecked'));
    store.subscribe((state: { isChecked: boolean }) =>
      boolean('isChecked', state.isChecked)
    );
    return (
      <Radio
        id="radio"
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
