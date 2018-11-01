import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, wInfo } from '../utils-ts';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Tabs, { Tab } from '../Tabs';
import Button from '../Button';
import Nav, { NavItem, NavSearch } from './index';

storiesOf('Components/Nav', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.'
    )
  })
  .addWithJSX('Basic', () => (
    <Nav
      useSideNav={boolean('useSideNav', true)}
      logo={text('logo', 'Logo')}
      isLeft={boolean('isLeft', false)}
      isFixed={boolean('isFixed', false)}
      hasCenteredLogo={boolean('hasCenteredLogo', false)}
      onClickLogo={action('onClickLogo')}
    >
      <NavItem href="!#" text="Sass" onClick={action('Sass onClick')} />
      <NavItem
        href="!#"
        text="Components"
        onClick={action('Components onClick')}
      />
      <NavItem
        href="!#"
        isActive={boolean('isActive', false)}
        text="Javascript"
        onClick={action('Javascript onClick')}
      />
      <NavItem href="!#" text="Mobile" onClick={action('Mobile onClick')} />
    </Nav>
  ))
  .addParameters({
    info: wInfo('To left align your navbar links, just add a `isLeft`')
  })
  .addWithJSX('Left Aligned Links', () => (
    <Nav logo="Logo" isLeft>
      <NavItem href="!#" text="Sass" onClick={action('Sass onClick')} />
      <NavItem
        href="!#"
        text="Components"
        onClick={action('Components onClick')}
      />
      <NavItem
        href="!#"
        isActive={boolean('isActive', false)}
        text="Javascript"
        onClick={action('Javascript onClick')}
      />
      <NavItem href="!#" text="Mobile" onClick={action('Mobile onClick')} />
    </Nav>
  ))
  .addParameters({
    info: wInfo(
      'The logo will center itself on medium and down screens, but if you want the logo to always be centered, add the `isCenter` prop to your NavBar. You will have to make sure yourself that links do not overlap if you use this.'
    )
  })
  .addWithJSX('Centering the logo', () => (
    <Nav logo="Logo" hasCenteredLogo>
      <NavItem href="!#" text="Sass" onClick={action('Sass onClick')} />
      <NavItem
        href="!#"
        text="Components"
        onClick={action('Components onClick')}
      />
      <NavItem
        href="!#"
        isActive={boolean('isActive', false)}
        text="Javascript"
        onClick={action('Javascript onClick')}
      />
      <NavItem href="!#" text="Mobile" onClick={action('Mobile onClick')} />
    </Nav>
  ))
  .addParameters({
    info: wInfo('Add `isActive` to your NavItems to denote the current page.')
  })
  .addWithJSX('Active Items', () => (
    <Nav logo="Logo">
      <NavItem href="!#" text="Sass" onClick={action('Sass onClick')} />
      <NavItem
        href="!#"
        text="Components"
        onClick={action('Components onClick')}
      />
      <NavItem
        isActive
        href="!#"
        text="Javascript"
        onClick={action('Javascript onClick')}
      />
      <NavItem href="!#" text="Mobile" onClick={action('Mobile onClick')} />
    </Nav>
  ))
  .addParameters({
    info: wInfo('Add `isActive` to your NavItems to denote the current page.')
  })
  .addWithJSX('Extended Navbar with Tabs', () => (
    <Nav
      useSideNav={boolean('useSideNav', true)}
      logo={text('logo', 'Logo')}
      isLeft={boolean('isLeft', false)}
      isFixed={boolean('isFixed', false)}
      hasCenteredLogo={boolean('hasCenteredLogo', false)}
      content={
        <>
          <Tabs className="tabs-transparent">
            <Tab link="#test1" text="Test 1" />
            <Tab link="#test2" text="Test 2" />
            <Tab isDisabled link="#test3" text="TDisabled Tab" />
            <Tab link="#test4" text="Test 4" />
          </Tabs>
          <Button
            isFloating
            isLarge
            withWaves
            className="halfway-fab teal"
            icon="add"
          />
        </>
      }
    >
      <NavItem href="!#" text="Sass" />
      <NavItem href="!#" text="Components" />
      <NavItem
        href="!#"
        isActive={boolean('isActive', false)}
        text="Javascript"
      />
      <NavItem href="!#" text="Mobile" />
    </Nav>
  ))
  .addParameters({
    info: wInfo(
      'To make the navbar fixed, you have to add an outer wrapping div with the class  navbar-fixed. This will offset your other content while making your nav fixed. You can adjust the height of this outer div to change how much offset is on your content.'
    )
  })
  .addWithJSX('Fixed NavBar', () => (
    <Nav logo="Logo" isFixed>
      <NavItem href="!#" text="Sass" onClick={action('Sass onClick')} />
      <NavItem
        href="!#"
        text="Components"
        onClick={action('Components onClick')}
      />
      <NavItem
        isActive
        href="!#"
        text="Javascript"
        onClick={action('Javascript onClick')}
      />
      <NavItem href="!#" text="Mobile" onClick={action('Mobile onClick')} />
    </Nav>
  ))
  .addWithJSX('Icon Links', () => (
    <Nav logo="logo">
      <NavItem href="!#" isButton icon="cloud" />
      <NavItem href="!#" icon="search" />
      <NavItem href="!#" icon="refresh" />
      <NavItem href="!#" icon="more_vert" />
    </Nav>
  ))
  .addParameters({
    info: wInfo(
      'For adding an icon to a text link you need to add either a  left or  right class to the icon depending on where you want the icon to be.'
    )
  })
  .addWithJSX('Icon + Text', () => (
    <Nav logo="logo">
      <NavItem href="!#" iconLeft icon="cloud" text="Link with Left Icon" />
      <NavItem href="!#" iconRight icon="search" text="Link with Right Icon" />
    </Nav>
  ))
  .addParameters({
    info: wInfo(
      'When your nav bar is resized, you will see that the links on the right turn into a hamburger icon menu.'
    )
  })
  .addWithJSX('Buttons', () => (
    <Nav logo="logo">
      <NavItem
        href="!#"
        isButton
        anchorClassName="btn-large"
        iconLeft
        icon="cloud"
        text="Button"
      />
      <NavItem href="!#" isButton iconRight icon="search" text="Button" />
      <NavItem
        href="!#"
        anchorClassName="btn-small"
        isButton
        iconRight
        icon="search"
        text="Button"
      />
    </Nav>
  ))
  .addParameters({
    info: wInfo('You can add a search form in the navbar.')
  })
  .addWithJSX('Search', () => (
    <Nav isSearch logo="logo">
      <NavSearch onChange={() => undefined} value={text('value', null)} />
    </Nav>
  ))
  .addParameters({
    info: wInfo('You can add a search form in the navbar.')
  })
  .addWithJSX('Mobile Collapse Button', () => (
    <Nav logo="Logo" useSideNav>
      <NavItem href="!#" text="Sass" onClick={action('Sass onClick')} />
      <NavItem
        href="!#"
        text="Components"
        onClick={action('Components onClick')}
      />
      <NavItem
        href="!#"
        isActive={boolean('isActive', false)}
        text="Javascript"
        onClick={action('Javascript onClick')}
      />
      <NavItem href="!#" text="Mobile" onClick={action('Mobile onClick')} />
    </Nav>
  ));
