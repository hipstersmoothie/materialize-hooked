import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action, createDummyPage, wInfo } from '../utils-ts';

import Pagination from '.';

storiesOf('Components/Pagination', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Add pagination links to help split up your long content into shorter, easier to understand blocks.'
    )
  })
  .addWithJSX('Basic', () => (
    <Pagination
      visibleRadius={number('visibleRadius', 2)}
      currentPage={number('currentPage', 1)}
      pages={number('className', 10)}
      onChange={action('New Page')}
    />
  ));
