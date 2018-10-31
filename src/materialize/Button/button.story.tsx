import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { action, createDummyPage } from '../../../stories/utils-ts';
import Button from '.';

storiesOf('Components/Button', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Button
      className={text('className', 'scale-transition scale-in')}
      text={text('text', null)}
      icon={text('icon', 'attach_file')}
      isPulsing={boolean('isPulsing', false)}
      isFlat={boolean('isFlat', false)}
      isFloating={boolean('isFloating', false)}
      isDisabled={boolean('isDisabled', false)}
      isLarge={boolean('isLarge', false)}
      isSmall={boolean('isSmall', false)}
      isSubmit={boolean('isSubmit', false)}
      isIconLeft={boolean('isIconLeft', false)}
      onClick={action('onClick')}
    />
  ));
