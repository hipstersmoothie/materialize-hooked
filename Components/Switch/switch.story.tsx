import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '../utils-ts';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';

// eslint-disable-next-line unicorn/import-index
import Switch from './index';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);

const store = new Store({
  isChecked: false
});

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  action('onChange')(e);
  store.set({ isChecked: !store.get('isChecked') });
};
onChange.toString = () => 'onChange';

storiesOf('Form/Switch', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .add('basic', () => {
    boolean('isChecked', store.get('isChecked'));
    store.subscribe((state: any) => boolean('isChecked', state.isChecked));

    return (
      <Switch
        isDisabled={boolean('isDisabled', false)}
        on={text('on', 'On')}
        off={text('off', 'Off')}
        onChange={onChange}
      />
    );
  });
