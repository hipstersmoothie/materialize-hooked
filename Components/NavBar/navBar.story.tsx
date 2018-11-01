import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '../utils-ts';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Nav, { NavItem, NavSearch } from './index';

storiesOf('Components/Nav', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
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
  .add('with buttons', () => (
    <Nav logo="logo">
      <NavItem href="!#" isButton text="Sass" />
      <NavItem href="!#" text="Components" />
      <NavItem href="!#" text="Javascript" />
      <NavItem href="!#" text="Mobile" />
    </Nav>
  ))

  .add('extra content', () => (
    <Nav
      useSideNav={boolean('useSideNav', true)}
      logo={text('logo', 'Logo')}
      isLeft={boolean('isLeft', false)}
      isFixed={boolean('isFixed', false)}
      hasCenteredLogo={boolean('hasCenteredLogo', false)}
      content={
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="#test1">Test 1</a>
            </li>
            <li className="tab">
              <a className="active" href="#test2">
                Test 2
              </a>
            </li>
            <li className="tab disabled">
              <a href="#test3">Disabled Tab</a>
            </li>
            <li className="tab">
              <a href="#test4">Test 4</a>
            </li>
          </ul>
          <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
            <i className="material-icons">add</i>
          </a>
        </div>
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
  .add('as a search bar', () => (
    <Nav isSearch logo="logo">
      <NavSearch onChange={() => undefined} value={text('value', null)} />
    </Nav>
  ));
