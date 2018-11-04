import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import MaterialBox from '.';
import { createDummyPage, wInfo } from '../utils';

storiesOf('Javascript/Media - MaterialBox', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Material box is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged, Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key.'
    )
  })
  .add('Basic', () => (
    <MaterialBox
      src={text('src', 'https://materializecss.com/images/sample-1.jpg')}
      caption={text('caption', 'A pretty picture')}
      width={number('width', 650)}
      inDuration={number('inDuration', 275)}
      outDuration={number('outDuration', 200)}
    />
  ));
