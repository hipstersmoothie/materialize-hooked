import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import CheckBox from '../src/materialize/checkbox';

const styles = {
  width: '50%',
  margin: 'auto',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/CheckBox', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <CheckBox
      isChecked={boolean('isChecked')}
      isDisabled={boolean('isDisabled')}
      isFilledIn={boolean('isFilledIn')}
      isIndeterminate={boolean('isIndeterminate')}
      onChange={action('onChange')}
    />
  ));
