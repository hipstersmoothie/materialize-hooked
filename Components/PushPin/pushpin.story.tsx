import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

// eslint-disable-next-line unicorn/import-index
import Body from '../Body';
import Pushpin from '.';

const styles = {
  width: '100%'
};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);

storiesOf('Javascript/Pushpin', module)
  .addDecorator(DummyPage)
  .addWithJSX('properties', () => (
    <Body>
      <Pushpin top={0} bottom={500}>
        <h1 style={{ margin: 0 }}>Sticky 1</h1>
      </Pushpin>
      <div style={{ height: 500, paddingTop: 65 }}>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
      <Pushpin top={500} bottom={1000}>
        <h1 style={{ margin: 0 }}>Sticky 2</h1>
      </Pushpin>
      <div style={{ height: 500 }}>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </div>
      <Pushpin top={1000} bottom={1500}>
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
