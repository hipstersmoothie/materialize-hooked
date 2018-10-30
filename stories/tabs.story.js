import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Tabs, { Tab } from '../src/materialize/tabs';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Form/Tabs', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <React.Fragment>
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
    </React.Fragment>
  ));
