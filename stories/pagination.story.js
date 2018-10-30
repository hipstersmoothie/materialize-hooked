import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from './utils';

// eslint-disable-next-line unicorn/import-index
import Pagination from '../src/materialize/pagination';
import { createDummyPage } from './utils-ts';

storiesOf('Components/Pagination', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Pagination
      visibleRadius={number('visibleRadius', 2)}
      currentPage={number('currentPage', 1)}
      pages={number('className', 10)}
      onChange={action('New Page')}
    />
  ));
