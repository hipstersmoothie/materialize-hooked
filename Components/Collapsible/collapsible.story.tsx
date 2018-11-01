import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { createDummyPage } from '../utils-ts';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import Icon from '../Icon';
import Collapsible, { CollapsibleItem } from '.';

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
          <>
            <Icon icon="filter_drama" />
            First
          </>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>
      <CollapsibleItem
        header={
          <>
            <Icon icon="place" />
            Second
          </>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>
      <CollapsibleItem
        header={
          <>
            <i className="material-icons">whatshot</i>
            Third
          </>
        }
      >
        <span>Lorem ipsum dolor sit amet.</span>
      </CollapsibleItem>
    </Collapsible>
  ));
