import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import ScrollSpy from '.';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Javascript/ScrollSpy', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <ScrollSpy
      throttle={number('throttle', 100)}
      scrollOffset={number('scrollOffset', 200)}
      activeClass={text('activeClass', 'active')}
    >
      <div className="row">
        <div className="col s12 m9 l10">
          <div
            id="introduction"
            style={{ height: 1000 }}
            className="section scrollspy"
          >
            <p>Content </p>
          </div>

          <div
            id="structure"
            style={{ height: 1000 }}
            className="section scrollspy"
          >
            <p>Content </p>
          </div>

          <div
            id="initialization"
            style={{ height: 1000 }}
            className="section scrollspy"
          >
            <p>Content </p>
          </div>
        </div>
        <div className="col hide-on-small-only m3 l2">
          <ul className="section table-of-contents pinned">
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#structure">Structure</a>
            </li>
            <li>
              <a href="#initialization">Intialization</a>
            </li>
          </ul>
        </div>
      </div>
    </ScrollSpy>
  ));
