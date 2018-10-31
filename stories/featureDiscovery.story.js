import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import FeatureDiscovery, {
  useFeatureDiscovery
} from '../src/materialize/featureDiscovery';
import Button from '../src/materialize/Button';
import Fab from '../src/materialize/fixedActionButton';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

const Example = () => {
  const featureDiscovery = useRef();
  const toggle = useFeatureDiscovery(featureDiscovery);

  return (
    <div>
      <Fab id="fab" className="red" icon="mode_edit" onClick={toggle}>
        <Button isFloating className="red" icon="insert_chart" />
        <Button isFloating className="yellow darken-1" icon="format_quote" />
        <Button isFloating className="green" icon="publish" />
        <Button isFloating className="blue" icon="attach_file" />
      </Fab>
      <FeatureDiscovery target="fab">
        <div className="tap-target-content">
          <h5>Title</h5>
          <p>A bunch of text</p>
        </div>
      </FeatureDiscovery>
    </div>
  );
};

storiesOf('Javascript/FeatureDiscovery', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => <Example />);
