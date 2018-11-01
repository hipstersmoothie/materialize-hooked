import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from '../utils-ts';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';

import DatePicker from '.';

storiesOf('Form/DatePicker', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('basic', () => (
    <DatePicker
      id="id"
      placeholder={text('placeholder', null)}
      help={text('help', null)}
      label={text('label', null)}
      icon={text('icon', 'account_circle')}
      isDisabled={boolean('isDisabled', false)}
      isInline={boolean('isInline', false)}
      autoClose={boolean('autoClose', false)}
      format={text('format', 'mmm dd, yyyy')}
      disableWeekends={boolean('disableWeekends', false)}
      firstDay={number('firstDay', 0)}
      yearRange={number('yearRange', 10)}
      isRTL={boolean('isRTL', false)}
      showMonthAfterYear={boolean('showMonthAfterYear', false)}
      showDaysInNextAndPreviousMonths={boolean(
        'showDaysInNextAndPreviousMonths',
        false
      )}
      showClearBtn={boolean('showClearBtn', false)}
      onChange={action('onChange')}
    />
  ));
