import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage, wInfo } from '../utils-ts';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';

import TimePicker from '.';

storiesOf('Form/Picker', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'The TimePicker allows users to select a date from an interactive clock.'
    )
  })
  .add('Time', () => (
    <TimePicker
      id="id"
      ariaLabel="Time Picker Input"
      placeholder={text('placeholder', null)}
      help={text('help', null)}
      label={text('label', null)}
      icon={text('icon', 'access_time')}
      isDisabled={boolean('isDisabled', false)}
      isInline={boolean('isInline', false)}
      duration={number('duration', 350)}
      container={text('container', null)}
      showClearBtn={boolean('showClearBtn', false)}
      defaultTime={text('defaultTime', 'now')}
      fromNow={number('fromNow', 0)}
      autoClose={boolean('autoClose', false)}
      twelveHour={boolean('twelveHour', true)}
      vibrate={boolean('vibrate', true)}
      onChange={action('onChange')}
    />
  ));
