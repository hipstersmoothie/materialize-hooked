import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action, createDummyPage } from '../../../stories/utils-ts';

import Pagination from '.';

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
