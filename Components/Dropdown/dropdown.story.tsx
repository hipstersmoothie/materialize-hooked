import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// eslint-disable-next-line unicorn/import-index
import Dropdown, { Divider, DropdownItem } from '.';
import { action, createDummyPage, wInfo } from '../utils';

storiesOf('Javascript/Dropdown', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo('Add a dropdown list to any button.')
  })
  .add('Basic', () => (
    <Dropdown
      text={text('text', 'Drop Me!')}
      alignment={select('alignment', { left: 'left', right: 'right' }, 'left')}
      autoTrigger={boolean('autoTrigger', true)}
      constrainWidth={boolean('constrainWidth', true)}
      coverTrigger={boolean('coverTrigger', true)}
      closeOnClick={boolean('closeOnClick', true)}
      hover={boolean('hover', false)}
      open={boolean('open', false)}
      inDuration={number('inDuration', 150)}
      outDuration={number('outDuration', 250)}
    >
      <DropdownItem onClick={action('One')}>one</DropdownItem>
      <DropdownItem onClick={action('Two')}>two</DropdownItem>
    </Dropdown>
  ))
  .add('Divider', () => (
    <Dropdown text="Drop Me!">
      <DropdownItem>one</DropdownItem>
      <DropdownItem>two</DropdownItem>
      <Divider />
      <DropdownItem>three</DropdownItem>
      <DropdownItem>
        <i className="material-icons">view_module</i>
        four
      </DropdownItem>
    </Dropdown>
  ));
