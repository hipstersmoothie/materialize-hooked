import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf, StoryDecorator } from '@storybook/react';
import * as React from 'react';
import { action, wInfo } from '../utils';

import Collection, { CollectionItem } from './index';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);
const makeIcon = (icon: string) => (
  <a href="#!" className="secondary-content">
    <i className="material-icons">{icon}</i>
  </a>
);

storiesOf('Components/Collection', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo('Collections allow you to group list objects together.')
  })
  .add('Basic', () => (
    <Collection header={text('header', '')}>
      <CollectionItem
        isActive={boolean('isActive', false)}
        onClick={action('Item 1')}
      >
        Alvin
      </CollectionItem>
      <CollectionItem onClick={action('Item 2')}>Simon</CollectionItem>
      <CollectionItem onClick={action('Item 3')}>Theodore</CollectionItem>
    </Collection>
  ))
  .add('Links', () => (
    <Collection isLinks header={text('header', '')}>
      <CollectionItem href="#" isActive={boolean('isActive', false)}>
        Alvin
      </CollectionItem>
      <CollectionItem href="#">Simon</CollectionItem>
      <CollectionItem href="#">Theodore</CollectionItem>
    </Collection>
  ))
  .add('Secondary Content', () => (
    <Collection isLinks header={text('header', '')}>
      <CollectionItem
        href="#"
        isActive={boolean('isActive', false)}
        secondaryContent={makeIcon('send')}
      >
        Alvin
      </CollectionItem>
      <CollectionItem href="#" secondaryContent={makeIcon('send')}>
        Simon
      </CollectionItem>
      <CollectionItem href="#" secondaryContent={makeIcon('send')}>
        Theodore
      </CollectionItem>
    </Collection>
  ))
  .add('Avatar Content', () => (
    <Collection header={text('header', '')}>
      <CollectionItem
        image="https://materializecss.com/images/yuna.jpg"
        secondaryContent={makeIcon('grade')}
      >
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
      </CollectionItem>
      <CollectionItem
        isActive={boolean('isActive', false)}
        icon="folder"
        secondaryContent={makeIcon('grade')}
      >
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
      </CollectionItem>
      <CollectionItem
        imageClassName="red"
        icon="insert_chart"
        secondaryContent={makeIcon('grade')}
      >
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
      </CollectionItem>
      <CollectionItem
        imageClassName="green"
        icon="play_arrow"
        secondaryContent={makeIcon('grade')}
      >
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
      </CollectionItem>
    </Collection>
  ));
