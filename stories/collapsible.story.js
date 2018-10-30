import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Collapsible, { CollapsibleItem } from '../src/materialize/collapsible';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Javascript/Collapsible', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Collapsible
      open={boolean('open', false)}
      isPopout={boolean('isPopout', false)}
      accordion={boolean('accordion', true)}
      inDuration={number('inDuration', 300)}
      outDuration={number('outDuration', 300)}
    >
      <CollapsibleItem
        isActive={boolean('isActive', false)}
        header={
          <span>
            <i className="material-icons">filter_drama</i>
            First
          </span>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>
      <CollapsibleItem
        header={
          <span>
            <i className="material-icons">place</i>
            Second
          </span>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>
      <CollapsibleItem
        header={
          <span>
            <i className="material-icons">whatshot</i>
            Third
          </span>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>
    </Collapsible>
  ));
