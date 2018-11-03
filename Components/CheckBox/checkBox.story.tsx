// @ts-ignore
import { StateDecorator, Store } from '@sambego/storybook-state';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action, createDummyPage, wInfo } from '../utils';

import CheckBox from '.';

const store = new Store({
  isChecked: false
});

const onChange = (e: React.ChangeEvent<HTMLElement>) => {
  action('onChange')(e);
  store.set({ isChecked: !store.get('isChecked') });
};
onChange.toString = () => 'onChange';

storiesOf('Form/CheckBox', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      `
      Forms are the standard way to receive user inputted data. The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.

      Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing.

      The validate class leverages HTML5 validation and will add a valid and invalid class accordingly.
      `
    )
  })
  .add('Basic', () => {
    boolean('isChecked', store.get('isChecked'));
    store.subscribe((state: { isChecked: boolean }) =>
      boolean('isChecked', state.isChecked)
    );

    return (
      <CheckBox
        isChecked={boolean('isChecked', false)}
        isDisabled={boolean('isDisabled', false)}
        isFilledIn={boolean('isFilledIn', false)}
        isIndeterminate={boolean('isIndeterminate', false)}
        onChange={onChange}
        value={text('value', 'Checkbox')}
      />
    );
  });
