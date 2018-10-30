import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Select, { SelectItem, SelectGroup } from '../src/materialize/select';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/Select', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Select
      label={text('label')}
      isMultiple={boolean('isMultiple')}
      isDisabled={boolean('isDisabled')}
      isBrowserDefault={boolean('isBrowserDefault')}
      onChange={action('onChange')}
    >
      <SelectItem
        value="Clark"
        isDisabled={boolean('isDisabled')}
        isSelected={boolean('isSelected')}
      />
      <SelectItem value="Bruce" />
      <SelectItem value="Donna" />
      <SelectItem value="Barry" />
    </Select>
  ))
  . addWithJSX('with icons', () => (
    <Select
      label={text('label')}
      isMultiple={boolean('isMultiple')}
      isBrowserDefault={boolean('isBrowserDefault')}
    >
      <SelectItem
        value="Clark"
        isDisabled={boolean('isDisabled')}
        isSelected={boolean('isSelected')}
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
  . addWithJSX('with groups', () => (
    <Select
      label={text('label')}
      isMultiple={boolean('isMultiple')}
      isBrowserDefault={boolean('isBrowserDefault')}
    >
      <SelectGroup label="Team A">
        <SelectItem
          value="Clark"
          isDisabled={boolean('isDisabled')}
          isSelected={boolean('isSelected')}
          icon="https://materializecss.com/images/sample-1.jpg"
        />
        <SelectItem
          value="Bruce"
          icon="https://materializecss.com/images/office.jpg"
        />
      </SelectGroup>
      <SelectGroup label="Team B" />
      <SelectItem
        value="Donna"
        icon="https://materializecss.com/images/yuna.jpg"
      />
      <SelectItem value="Barry" />
    </Select>
  ));
