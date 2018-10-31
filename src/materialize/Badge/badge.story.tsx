import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import { createDummyPage } from '../../../stories/utils-ts';

import Badge from '.';

storiesOf('Components/Badge', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Badge
      isNew={boolean('isNew', true)}
      value={number('value', 1)}
      className={text('className', 'red')}
      caption={text('caption', '')}
    />
  ));
