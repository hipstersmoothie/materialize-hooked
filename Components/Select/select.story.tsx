import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage, wInfo } from '../utils-ts';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Select, { SelectItem, SelectGroup } from '.';

storiesOf('Form/Select', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo('Select allows user input through specified options. ')
  })
  .add('Basic', () => (
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
  .addParameters({
    info: wInfo(
      'You can add the property `isMultiple` to get the multiple select and select several options.'
    )
  })
  .add('Multiple', () => (
    <Select
      isMultiple
      label={text('label', null)}
      onChange={action('onChange')}
    >
      <SelectItem value="Clark" />
      <SelectItem value="Bruce" />
      <SelectItem value="Donna" />
      <SelectItem value="Barry" />
    </Select>
  ))
  .addParameters({
    info: wInfo('We also support optgroups in our selects.')
  })
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
  ))
  .addParameters({
    info: wInfo(
      'You can add icons to your options in any type of select. In the option you add the `icon` prop.'
    )
  })
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
  .addParameters({
    info: wInfo(
      'You can also add `isDisabled` to the select element to make the whole thing disabled. Or if you add `isDisabled` to the options, the individual options will be unselectable.'
    )
  })
  .add('Disabled Styles', () => (
    <Select
      label={text('label', null)}
      isDisabled={boolean('isDisabled', false)}
    >
      <SelectItem
        value="Clark"
        isDisabled={boolean('isDisabled Clark', false)}
        isSelected={boolean('isSelected Clark', false)}
      />
      <SelectItem
        value="Bruce"
        isDisabled={boolean('isDisabled Bruce', false)}
        isSelected={boolean('isSelected Bruce', false)}
      />
      <SelectItem
        value="Donna"
        isDisabled={boolean('isDisabled Donna', false)}
        isSelected={boolean('isSelected Donna', false)}
      />
      <SelectItem
        value="Barry"
        isDisabled={boolean('isDisabled Barry', false)}
        isSelected={boolean('isSelected Barry', false)}
      />
    </Select>
  ));
