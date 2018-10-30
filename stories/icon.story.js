import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Icon from '../src/materialize/icon';
import { createDummyPage } from './utils-ts';

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
