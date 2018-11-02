import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import Button from '../Button';
import { createDummyPage, wInfo } from '../utils-ts';
import Toast from '.';

storiesOf('Javascript/Toast', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Materialize provides an easy way for you to send unobtrusive alerts to your users through toasts. These toasts are also placed and sized responsively, try it out by clicking the button below on different device sizes.'
    )
  })
  .add('Basic', () => (
    <Toast
      text={text('text', 'I am the toast!')}
      displayLength={number('displayLength', 4000)}
      inDuration={number('inDuration', 300)}
      outDuration={number('outDuration', 375)}
      classes={text('classes', '')}
      activationPercent={number('activationPercent', 0.8)}
    >
      {onClick => <Button text="Click me" onClick={onClick} />}
    </Toast>
  ))
  .addParameters({
    info: wInfo(
      'You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks.'
    )
  })
  .add('Custom HTML', () => (
    <Toast html="I am the custom HTML">
      {onClick => <Button text="Click me" onClick={onClick} />}
    </Toast>
  ))
  .addParameters({
    info: wInfo(
      "We've added the ability to customize your toasts easily. You can pass in classes as an optional parameter into the toast function. We've added a rounded class for you, but you can create your own CSS classes and apply them to toasts. Checkout out our full example below."
    )
  })
  .add('Styling Toasts', () => (
    <Toast text="I am the Toast" classes="rounded">
      {onClick => <Button text="Click me" onClick={onClick} />}
    </Toast>
  ));
