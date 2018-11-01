import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { createDummyPage, wInfo } from '../utils-ts';
import Icon from '.';

storiesOf('Components/Icon', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(`
          We have included 932 Material Design Icons courtesy of Google. You can download them directly from the [Material Design specs](Material Design specs).

          # Usage

          To be able to use these icons, you must include this line in the <head>portion of your HTML code

          ~~~html
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  
          ~~~
        `)
  })
  .add('Basic', () => (
    <Icon
      icon={text('icon', 'publish')}
      isTiny={boolean('isTiny', false)}
      isSmall={boolean('isSmall', false)}
      isMedium={boolean('isMedium', false)}
      isLarge={boolean('isLarge', false)}
    />
  ));
