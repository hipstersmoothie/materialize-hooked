import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, createDummyPage, wInfo } from '../utils-ts';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import Tabs, { Tab } from '.';

storiesOf('Javascript/Tabs', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      `
      The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the prop \`isDisabled\` to make a tab inaccessible.

      Tabs automatically become scrollable when there are too many to fit on screen
      `
    )
  })
  .add('Basic', () => (
    <Tabs
      duration={number('duration', 300)}
      isFixedWidth={boolean('isFixedWidth', false)}
      swipeable={boolean('swipeable', false)}
      responsiveThreshold={number('responsiveThreshold', Infinity)}
      content={
        <div>
          <div id="test1" className="col s12">
            Test 1
          </div>
          <div id="test2" className="col s12">
            Test 2
          </div>
          <div id="test3" className="col s12">
            Test 3
          </div>
          <div id="test4" className="col s12">
            Test 4
          </div>
        </div>
      }
      onShow={action('onShow')}
    >
      <Tab link="#test1" text="Test 1" />
      <Tab isActive link="#test2" text="Test 2" />
      <Tab
        isDisabled={boolean('isDisabled', false)}
        link="#test3"
        text="Test 3"
      />
      <Tab link="#test4" text="Test 4" />
    </Tabs>
  ))
  .addParameters({
    info: wInfo(
      `
      By default, the first tab is selected. But if this is not what you want, you can preselect a tab by add \`isActive\` to a tab item.
      `
    )
  })
  .add('Preselecting a tab', () => (
    <Tabs
      content={
        <div>
          <div id="test1" className="col s12">
            Test 1
          </div>
          <div id="test2" className="col s12">
            Test 2
          </div>
          <div id="test3" className="col s12">
            Test 3
          </div>
          <div id="test4" className="col s12">
            Test 4
          </div>
        </div>
      }
      onShow={action('onShow')}
    >
      <Tab link="#test1" text="Test 1" />
      <Tab isActive link="#test2" text="Test 2" />
      <Tab
        isDisabled={boolean('isDisabled', false)}
        link="#test3"
        text="Test 3"
      />
      <Tab link="#test4" text="Test 4" />
    </Tabs>
  ))
  .addParameters({
    info: wInfo(
      `
      By default, Materialize tabs will ignore their default anchor behaviour. To force a tab to behave as a regular hyperlink, just specify the target property of that link!
      `
    )
  })
  .add('Linking to an External Page', () => (
    <Tabs
      content={
        <div>
          <div id="test1" className="col s12">
            Test 1
          </div>
          <div id="test2" className="col s12">
            Test 2
          </div>
          <div id="test3" className="col s12">
            Test 3
          </div>
          <div id="test4" className="col s12">
            Test 4
          </div>
        </div>
      }
      onShow={action('onShow')}
    >
      <Tab link="#test1" text="Test 1" />
      <Tab isActive link="#test2" text="Test 2" />
      <Tab
        isDisabled={boolean('isDisabled', false)}
        link="#test3"
        text="Test 3"
      />
      <Tab link="#test4" text="Test 4" />
      <Tab target="_blank" link="http://google.com" text="Google" />
    </Tabs>
  ))
  .addParameters({
    info: wInfo(
      `
      By setting the \`isSwipeable\` props to true, you can enable tabs where you can swipe on touch enabled devices to switch tabs. Make sure you keep the tab content divs in the same wrapping container. You can also set the responsiveThreshold option to a screen width in pixels where the swipeable functionality will activate.

      Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.
      `
    )
  })
  .add('Swipeable Tabs', () => (
    <Tabs
      swipeable
      content={
        <div>
          <div id="test1" className="col s12 blue">
            Test 1
          </div>
          <div id="test2" className="col s12 red">
            Test 2
          </div>
          <div id="test3" className="col s12 green">
            Test 3
          </div>
        </div>
      }
      onShow={action('onShow')}
    >
      <Tab link="#test1" text="Test 1" />
      <Tab isActive link="#test2" text="Test 2" />
      <Tab
        isDisabled={boolean('isDisabled', false)}
        link="#test3"
        text="Test 3"
      />
    </Tabs>
  ))
  .addParameters({
    info: wInfo(
      `
      Add the \`isFixedWidth\` prop for the tabs to fit the width.
      `
    )
  })
  .add('Fixed Width Tabs', () => (
    <Tabs
      isFixedWidth
      content={
        <div>
          <div id="test1" className="col s12 blue">
            Test 1
          </div>
          <div id="test2" className="col s12 red">
            Test 2
          </div>
          <div id="test3" className="col s12 green">
            Test 3
          </div>
        </div>
      }
      onShow={action('onShow')}
    >
      <Tab link="#test1" text="Test 1" />
      <Tab isActive link="#test2" text="Test 2" />
      <Tab
        isDisabled={boolean('isDisabled', false)}
        link="#test3"
        text="Test 3"
      />
    </Tabs>
  ));
