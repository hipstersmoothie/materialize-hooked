import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf, StoryDecorator } from '@storybook/react';
import * as React from 'react';

import { wInfo } from '../utils';
import Parallax from './index';

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
  ))
  .add('With Content', () => (
    <>
      <Parallax src="https://materializecss.com/images/parallax1.jpg">
        <h2
          className="header white-text section"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            margin: 0,
            padding: 0
          }}
        >
          Fancy Header
        </h2>
      </Parallax>
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
