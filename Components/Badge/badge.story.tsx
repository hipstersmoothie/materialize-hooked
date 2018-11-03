import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createDummyPage, wInfo, Wrapper } from '../utils';

import Badge from '.';
import Collapsible, { CollapsibleItem } from '../Collapsible';
import Collection, { CollectionItem } from '../Collection';
import Dropdown, { DropdownItem } from '../Dropdown';
import Icon from '../Icon';
import NavBar, { NavItem } from '../NavBar';

storiesOf('Components/Badge', module)
  .addParameters({
    info: wInfo(
      'Badges can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the background.'
    )
  })
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Badge
      isNew={boolean('isNew', true)}
      value={number('value', 1)}
      className={text('className', 'red')}
      caption={text('caption', '')}
    />
  ));

storiesOf('Components/Badge', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(undefined, [Collection, CollectionItem, Wrapper])
  })
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
  .addParameters({
    info: wInfo(undefined, [DropdownItem, Dropdown, Wrapper])
  })
  .add('Badges in Dropdown', () => (
    <Wrapper>
      <Dropdown text="Dropdown" className="red">
        <DropdownItem>
          <Badge value={1} /> one
        </DropdownItem>
        <DropdownItem>
          <Badge isNew value={1} /> two
        </DropdownItem>
        <DropdownItem>three</DropdownItem>
      </Dropdown>
    </Wrapper>
  ));

storiesOf('Components/Badge', module)
  .addParameters({
    info: wInfo(undefined, [NavItem, NavBar, Wrapper])
  })
  .add('Badges in Navbar', () => (
    <NavBar logo="Logo">
      <NavItem href="!#" text="HTML" />
      <NavItem href="!#">
        CSS <Badge isNew value={1} />
      </NavItem>
      <NavItem href="!#">Javascript</NavItem>
    </NavBar>
  ));

storiesOf('Components/Badge', module)
  .addParameters({
    info: wInfo(undefined, [Collapsible, CollapsibleItem, Wrapper])
  })
  .addDecorator(
    createDummyPage({
      maxWidth: 400,
      width: '100%',
      display: 'block',
      margin: 'auto'
    })
  )
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
