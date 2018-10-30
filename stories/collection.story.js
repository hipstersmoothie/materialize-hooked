import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Collection, { CollectionItem } from '../src/materialize/collection';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;
const icon = icon => (
  <a href="#!" className="secondary-content">
    <i className="material-icons">{icon}</i>
  </a>
);

storiesOf('Components/Collection', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('normal list', () => (
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
  .addWithJSX('link list', () => (
    <Collection isLinks header={text('header', '')}>
      <CollectionItem href="#" isActive={boolean('isActive', false)}>
        Alvin
      </CollectionItem>
      <CollectionItem href="#">Simon</CollectionItem>
      <CollectionItem href="#">Theodore</CollectionItem>
    </Collection>
  ))
  .addWithJSX('Secondary Content', () => (
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
  .addWithJSX('Avatar Content', () => (
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
