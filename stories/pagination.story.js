import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from './utils';

// eslint-disable-next-line unicorn/import-index
import Pagination from '../src/materialize/pagination';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Components/Pagination', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Pagination
      visibleRadius={number('visibleRadius', 2)}
      currentPage={number('currentPage', 1)}
      pages={number('className', 10)}
      onChange={action('New Page')}
    />
  ));
