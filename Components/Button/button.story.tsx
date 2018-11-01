import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { action, createDummyPage } from '../utils-ts';
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
      withWaves={boolean('withWaves', false)}
      onClick={action('onClick')}
    />
  ));

storiesOf('Components/Button', module)
  .addDecorator(
    createDummyPage({
      display: 'flex',
      justifyContent: 'space-evenly',
      width: 400
    })
  )
  .addDecorator(createDummyPage())
  .addWithJSX('Raised', () => (
    <>
      <Button text="button" />
      <Button isIconLeft text="button" icon="cloud" />
      <Button text="button" icon="cloud" />
    </>
  ))
  .addWithJSX('Floating', () => (
    <Button isFloating withWaves isLarge className="red" icon="add" />
  ))
  .addWithJSX('Flat', () => (
    <Button isFlat withWaves isLarge className="waves-teal" text="button" />
  ));
