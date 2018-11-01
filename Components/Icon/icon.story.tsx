import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { createDummyPage } from '../utils-ts';
import Icon from '.';

storiesOf('Components/Icon', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Icon
      icon={text('icon', 'publish')}
      isTiny={boolean('isTiny', false)}
      isSmall={boolean('isSmall', false)}
      isMedium={boolean('isMedium', false)}
      isLarge={boolean('isLarge', false)}
    />
  ));
