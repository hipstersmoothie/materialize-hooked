import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Button from '.';
import { action, createDummyPage, wInfo } from '../utils';

storiesOf('Components/Button', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo()
  })
  .add('Basic', () => (
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
      alignItems: 'center',
      width: 500
    })
  )
  .addParameters({
    info: wInfo(
      'The raised button is a standard button that signify actions and seek to give depth to a mostly flat page.'
    )
  })
  .addDecorator(createDummyPage())
  .add('Raised', () => (
    <>
      <Button text="button" />
      <Button isIconLeft text="button" icon="cloud" />
      <Button text="button" icon="cloud" />
    </>
  ))
  .addParameters({
    info: wInfo(
      'The floating circular action button is meant for very important functions.'
    )
  })
  .add('Floating', () => (
    <Button isFloating withWaves isLarge className="red" icon="add" />
  ))
  .addParameters({
    info: wInfo(
      'Flat buttons are usually used within elements that already have depth like cards or modals.'
    )
  })
  .add('Flat', () => (
    <Button isFlat withWaves isLarge className="waves-teal" text="button" />
  ))
  .addParameters({
    info: wInfo(
      'When you use a button to submit a form, instead of using a input tag, use a button tag with a type submit'
    )
  })
  .add('Submit Button', () => <Button isSubmit text="button" />)
  .addParameters({
    info: wInfo(
      'This button has a larger height for buttons that need more attention.'
    )
  })
  .add('Large', () => (
    <>
      <Button isLarge text="button" />
      <Button isLarge isIconLeft text="button" icon="cloud" />
      <Button isLarge text="button" icon="cloud" />
    </>
  ))
  .addParameters({
    info: wInfo(
      'When mouse and keyboard are the primary input methods, this smaller button is useful for denser UI layouts.'
    )
  })
  .add('Small', () => (
    <>
      <Button isSmall text="button" />
      <Button isSmall isIconLeft text="button" icon="cloud" />
      <Button isSmall text="button" icon="cloud" />
    </>
  ))
  .addParameters({
    info: wInfo('This style can be applied to all button types.')
  })
  .add('Disabled', () => (
    <>
      <Button isDisabled isLarge text="button" />
      <Button isDisabled text="button" />
      <Button isDisabled isFlat isIconLeft text="button" />
      <Button isDisabled isFloating icon="add" />
    </>
  ));
