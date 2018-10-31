import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { createDummyPage } from '../../../stories/utils-ts';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import Collapsible, { CollapsibleItem } from './index';

storiesOf('Javascript/Collapsible', module)
  .addDecorator(
    createDummyPage({
      width: 400,
      height: 400,
      margin: 'auto'
    })
  )
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Collapsible
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
