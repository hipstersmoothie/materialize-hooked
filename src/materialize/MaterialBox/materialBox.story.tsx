import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import { createDummyPage } from '../../../stories/utils-ts';
import MaterialBox from '.';

storiesOf('Javascript/Media', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('MaterialBox', () => (
    <MaterialBox
      src={text('src', 'https://materializecss.com/images/sample-1.jpg')}
      caption={text('caption', 'A pretty picture')}
      width={number('width', 650)}
      inDuration={number('inDuration', 275)}
      outDuration={number('outDuration', 200)}
    />
  ));
