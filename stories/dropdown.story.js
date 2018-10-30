import React from 'react';
import { action } from './utils';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  boolean,
  number,
  text,
  select
} from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Dropdown, { DropdownItem, Divider } from '../src/materialize/dropdown';
import { createDummyPage } from './utils-ts';

storiesOf('Javascript/Dropdown', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
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
  .addWithJSX('with divider', () => (
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
