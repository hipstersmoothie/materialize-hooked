import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createDummyPage, wInfo } from '../utils';

import Collapsible, { CollapsibleItem } from '.';
import Icon from '../Icon';

storiesOf('Javascript/Collapsible', module)
  .addDecorator(
    createDummyPage({
      width: 400,
      margin: 'auto'
    })
  )
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.'
    )
  })
  .add('Basic', () => (
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
  ))
  .addParameters({
    info: wInfo(
      'There are two ways a collapsible can behave. It can either allow multiple sections to stay open, or it can only allow one section to stay open at a time, which is called an accordion. See below for a demo of each type.'
    )
  })
  .add('Collapsible Types', () => (
    <div>
      <Collapsible>
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
      <Collapsible>
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
      <Collapsible accordion={false}>
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
      <Collapsible isPopout>
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
    </div>
  ));
