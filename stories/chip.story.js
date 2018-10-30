import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Chip from '../src/materialize/chip';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/Chip', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Chip
      value={text('value', 'Chip Component')}
      hasClose={boolean('hasClose')}
      image={text('image', 'https://materializecss.com/images/yuna.jpg')}
      onClick={action('onClick')}
      onClickClose={action('onClickClose')}
    />
  ));
