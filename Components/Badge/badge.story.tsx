import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import { createDummyPage } from '../utils-ts';

import NavBar, { NavItem } from '../NavBar';
import Collapsible, { CollapsibleItem } from '../Collapsible';
import Icon from '../Icon';
import Collection, { CollectionItem } from '../Collection';
import Dropdown, { DropdownItem } from '../Dropdown';
import Badge from '.';

storiesOf('Components/Badge', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Badge
      isNew={boolean('isNew', true)}
      value={number('value', 1)}
      className={text('className', 'red')}
      caption={text('caption', '')}
    />
  ));

storiesOf('Components/Badge', module)
  .addDecorator(
    createDummyPage({
      maxWidth: 400,
      width: '100%',
      display: 'block',
      margin: 'auto'
    })
  )
  .addDecorator(createDummyPage())
  .add('Collections', () => (
    <Collection isLinks>
      <CollectionItem href="!#">
        <Badge value={1} /> Mary
      </CollectionItem>
      <CollectionItem href="!#">
        <Badge isNew value={4} /> Adam
      </CollectionItem>
      <CollectionItem href="!#">Andrew</CollectionItem>
      <CollectionItem href="!#">
        <Badge value={14} /> Sue
      </CollectionItem>
    </Collection>
  ));

storiesOf('Components/Badge', module)
  .addDecorator(createDummyPage())
  .add('Badges in Dropdown', () => (
    <Dropdown text="Dropdown">
      <DropdownItem>
        <Badge value={1} /> one
      </DropdownItem>
      <DropdownItem>
        <Badge isNew value={1} /> two
      </DropdownItem>
      <DropdownItem>three</DropdownItem>
    </Dropdown>
  ));

storiesOf('Components/Badge', module).add('Badges in Navbar', () => (
  <NavBar logo="Logo">
    <NavItem href="!#" text="HTML" />
    <NavItem href="!#">
      CSS <Badge isNew value={1} />
    </NavItem>
    <NavItem href="!#">Javascript</NavItem>
  </NavBar>
));

storiesOf('Components/Badge', module)
  .addDecorator(
    createDummyPage({
      maxWidth: 400,
      width: '100%',
      display: 'block',
      margin: 'auto'
    })
  )
  .addDecorator(createDummyPage())
  .add('Badges in Collapsible', () => (
    <Collapsible>
      <CollapsibleItem
        header={
          <>
            <Icon icon="filter_drama" />
            First
            <Badge isNew value={4} />
          </>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>

      <CollapsibleItem
        header={
          <>
            <Icon icon="place" />
            Second
            <Badge value={1} />
          </>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>
    </Collapsible>
  ));
