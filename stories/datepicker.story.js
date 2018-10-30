import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import DatePicker from '../src/materialize/datePicker';

const styles = {
  width: '50%',
  margin: 'auto',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/DatePicker', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <DatePicker
      placeholder={text('placeholder')}
      help={text('help')}
      label={text('label')}
      icon={text('icon', 'account_circle')}
      isDisabled={boolean('isDisabled')}
      isInline={boolean('isInline')}
      autoClose={boolean('autoClose', false)}
      format={text('format', 'mmm dd, yyyy')}
      disableWeekends={boolean('disableWeekends', false)}
      firstDay={number('firstDay', 0)}
      minDate={text('minDate', null)}
      maxDate={text('maxDate', null)}
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
