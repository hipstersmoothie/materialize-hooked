import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

// eslint-disable-next-line unicorn/import-index
import Body from '../Body';
import Pushpin from '.';
import { wInfo } from '../utils-ts';

const styles = {
  width: '100%'
};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);

storiesOf('Javascript/Pushpin', module)
  .addDecorator(DummyPage)
  .addParameters({
    info: wInfo(
      'Pushpin is our fixed positioning plugin. Use this to pin elements to your page during specific scroll ranges. You can check out our live example: the fixed table of contents on the right.',
      [Body]
    )
  })
  .add('Basic', () => (
    <Body>
      <Pushpin top={275} bottom={775}>
        <h1 style={{ margin: 0 }}>Sticky 1</h1>
      </Pushpin>
      <div style={{ height: 500 }}>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
      <Pushpin top={775} bottom={1275}>
        <h1 style={{ margin: 0 }}>Sticky 2</h1>
      </Pushpin>
      <div style={{ height: 500 }}>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
      <Pushpin top={1275} bottom={1775}>
        <h1 style={{ margin: 0 }}>Sticky 3</h1>
      </Pushpin>
      <div style={{ height: 500 }}>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
      <div style={{ height: 500 }}>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
    </Body>
  ));
