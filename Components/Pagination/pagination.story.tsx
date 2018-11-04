import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action, createDummyPage, wInfo } from '../utils';

import Pagination from '.';

storiesOf('Components/Pagination', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Add pagination links to help split up your long content into shorter, easier to understand blocks.'
    )
  })
  .add('Basic', () => (
    <Pagination
      visibleRadius={number('visibleRadius', 2)}
      currentPage={number('currentPage', 1)}
      pages={number('className', 10)}
      onChange={action('New Page')}
    />
  ));
