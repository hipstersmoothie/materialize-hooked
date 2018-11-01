import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import ScrollSpy from '.';
import { wInfo } from '../utils-ts';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Javascript/ScrollSpy', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      "Scrollspy is a jQuery plugin that tracks certain elements and which element the user's screen is currently centered on. Our main demo of this is our table of contents on every documentation page to the right. Clicking on these links will also scroll the page to that element."
    )
  })
  .add('basic', () => (
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
