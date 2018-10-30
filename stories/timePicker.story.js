import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import TimePicker from '../src/materialize/timePicker';

const styles = {
  width: '50%',
  margin: 'auto',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/TimePicker', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <TimePicker
      placeholder={text('placeholder')}
      help={text('help')}
      label={text('label')}
      icon={text('icon', 'access_time')}
      isDisabled={boolean('isDisabled')}
      isInline={boolean('isInline')}
      duration={number('duration', 350)}
      container={text('container')}
      showClearBtn={boolean('showClearBtn')}
      defaultTime={text('defaultTime', 'now')}
      fromNow={number('fromNow', 0)}
      autoClose={boolean('autoClose')}
      twelveHour={boolean('twelveHour', true)}
      vibrate={boolean('vibrate', true)}
      onChange={action('onChange')}
    />
  ));
