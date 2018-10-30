import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Nav, { NavItem, NavSearch } from '../src/materialize/nav';

storiesOf('Components/Nav', module)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Nav
      useSideNav={boolean('useSideNav', true)}
      logo={text('logo', 'Logo')}
      isLeft={boolean('isLeft', false)}
      isFixed={boolean('isFixed', false)}
      hasCenteredLogo={boolean('hasCenteredLogo', false)}
      onClickLogo={action('onClickLogo')}
    >
      <NavItem text="Sass" onClick={action('Sass onClick')} />
      <NavItem text="Components" onClick={action('Components onClick')} />
      <NavItem
        isActive={boolean('isActive', false)}
        text="Javascript"
        onClick={action('Javascript onClick')}
      />
      <NavItem text="Mobile" onClick={action('Mobile onClick')} />
    </Nav>
  ))
  . addWithJSX('with buttons', () => (
    <Nav logo="logo">
      <NavItem isButton text="Sass" />
      <NavItem text="Components" />
      <NavItem text="Javascript" />
      <NavItem text="Mobile" />
    </Nav>
  ))

  . addWithJSX('extra content', () => (
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
      <NavItem text="Sass" />
      <NavItem text="Components" />
      <NavItem isActive={boolean('isActive', false)} text="Javascript" />
      <NavItem text="Mobile" />
    </Nav>
  ))
  . addWithJSX('as a search bar', () => (
    <Nav isSearch logo="logo">
      <NavSearch value={text('value')} />
    </Nav>
  ));
