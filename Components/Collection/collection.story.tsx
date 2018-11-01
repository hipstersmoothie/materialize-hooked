import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action, wInfo } from '../utils-ts';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Collection, { CollectionItem } from './index';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);
const icon = (icon: string) => (
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
        secondaryContent={icon('send')}
      >
        Alvin
      </CollectionItem>
      <CollectionItem href="#" secondaryContent={icon('send')}>
        Simon
      </CollectionItem>
      <CollectionItem href="#" secondaryContent={icon('send')}>
        Theodore
      </CollectionItem>
    </Collection>
  ))
  .add('Avatar Content', () => (
    <Collection header={text('header', '')}>
      <CollectionItem
        image="https://materializecss.com/images/yuna.jpg"
        secondaryContent={icon('grade')}
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
        secondaryContent={icon('grade')}
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
        secondaryContent={icon('grade')}
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
        secondaryContent={icon('grade')}
      >
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
      </CollectionItem>
    </Collection>
  ));
