// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action, createDummyPage, wInfo } from '../utils';

// eslint-disable-next-line unicorn/import-index
import Switch from './index';

const store = new Store({
  isOn: false
});

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  action('onChange')(e);
  store.set({ isOn: !store.get('isOn') });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Switch', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Switches are special checkboxes used for binary states such as on / off'
    )
  })
  .add('Basic', () => {
    boolean('isOn', store.get('isOn'));
    store.subscribe((state: any) => boolean('isOn', state.isOn));

    return (
      <Switch
        isDisabled={boolean('isDisabled', false)}
        on={text('on', 'On')}
        off={text('off', 'Off')}
        onChange={onChange}
      />
    );
  });
