import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage } from '../utils-ts';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Select, { SelectItem, SelectGroup } from '.';

storiesOf('Form/Select', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Select
      label={text('label', null)}
      isMultiple={boolean('isMultiple', false)}
      isDisabled={boolean('isDisabled', false)}
      isBrowserDefault={boolean('isBrowserDefault', false)}
      onChange={action('onChange')}
    >
      <SelectItem
        value="Clark"
        isDisabled={boolean('isDisabled', false)}
        isSelected={boolean('isSelected', false)}
      />
      <SelectItem value="Bruce" />
      <SelectItem value="Donna" />
      <SelectItem value="Barry" />
    </Select>
  ))
  .add('with icons', () => (
    <Select
      label={text('label', null)}
      isMultiple={boolean('isMultiple', false)}
      isBrowserDefault={boolean('isBrowserDefault', false)}
    >
      <SelectItem
        value="Clark"
        isDisabled={boolean('isDisabled', false)}
        isSelected={boolean('isSelected', false)}
        icon="https://materializecss.com/images/sample-1.jpg"
      />
      <SelectItem
        value="Bruce"
        icon="https://materializecss.com/images/office.jpg"
      />
      <SelectItem
        value="Donna"
        icon="https://materializecss.com/images/yuna.jpg"
      />
      <SelectItem value="Barry" />
    </Select>
  ))
  .add('with groups', () => (
    <Select
      label={text('label', null)}
      isMultiple={boolean('isMultiple', false)}
      isBrowserDefault={boolean('isBrowserDefault', false)}
    >
      <SelectGroup label="Team A">
        <SelectItem
          value="Clark"
          isDisabled={boolean('isDisabled', false)}
          isSelected={boolean('isSelected', false)}
          icon="https://materializecss.com/images/sample-1.jpg"
        />
        <SelectItem
          value="Bruce"
          icon="https://materializecss.com/images/office.jpg"
        />
      </SelectGroup>
      <SelectGroup label="Team B">
        <SelectItem
          value="Donna"
          icon="https://materializecss.com/images/yuna.jpg"
        />
        <SelectItem value="Barry" />
      </SelectGroup>
    </Select>
  ));
