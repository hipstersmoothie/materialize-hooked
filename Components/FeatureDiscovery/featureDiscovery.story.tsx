import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Button from '../Button';
import Fab from '../FloatingActionButton';
import FeatureDiscovery, { useFeatureDiscovery } from '.';
import { createDummyPage } from '../utils-ts';

const { useRef } = React;

const Example = () => {
  const featureDiscovery = useRef<HTMLDivElement>();
  const toggle = useFeatureDiscovery(featureDiscovery);

  return (
    <div>
      <Fab id="fab" className="red" icon="mode_edit" onClick={toggle}>
        <Button isFloating className="red" icon="insert_chart" />
        <Button isFloating className="yellow darken-1" icon="format_quote" />
        <Button isFloating className="green" icon="publish" />
        <Button isFloating className="blue" icon="attach_file" />
      </Fab>
      <FeatureDiscovery ref={featureDiscovery} target="fab">
        <div className="tap-target-content white-text">
          <h5>Title</h5>
          <p>A bunch of text</p>
        </div>
      </FeatureDiscovery>
    </div>
  );
};

storiesOf('Javascript/FeatureDiscovery', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => <Example />);
