import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Parallax from './index';
import { wInfo } from '../utils-ts';

const styles = {};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);

storiesOf('Javascript/Parallax', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.'
    )
  })
  .add('Basic', () => (
    <>
      <Parallax src="https://materializecss.com/images/parallax1.jpg" />
      <div className="section white">
        <div className="row container">
          <div className="col s12 m10 offset-m1">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
      </div>
    </>
  ));
