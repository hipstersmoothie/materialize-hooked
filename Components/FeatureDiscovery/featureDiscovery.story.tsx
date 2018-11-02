import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Button from '../Button';
import Fab from '../FloatingActionButton';
import FeatureDiscoveryDefault, {
  FeatureDiscovery,
  useFeatureDiscovery
} from '.';
import { createDummyPage, wInfo } from '../utils-ts';

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
      <FeatureDiscoveryDefault ref={featureDiscovery} target="fab">
        <div className="tap-target-content white-text">
          <h5>Title</h5>
          <p>A bunch of text</p>
        </div>
      </FeatureDiscoveryDefault>
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
  .addParameters({
    info: wInfo(
      `
      Provide value and encourage return visits by introducing users to new features and functionality at contextually relevant moments.  

      Feature discovery prompts have more impact when they are presented to the right users at contextually relevant moments. When presented to the wrong user at the wrong time, they can be intrusive and annoying.
      `,
      [Example]
    )
  })
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <div>
      <FeatureDiscovery target="fab">
        <div className="tap-target-content white-text">
          <h5>Title</h5>
          <p>A bunch of text</p>
        </div>
      </FeatureDiscovery>
      <Example />
    </div>
  ));
