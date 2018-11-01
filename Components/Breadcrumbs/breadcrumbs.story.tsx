import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '../utils-ts';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Breadcrumbs, { Breadcrumb } from '.';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);

storiesOf('Components/Breadcrumbs', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Breadcrumbs>
      <Breadcrumb value="First" onClick={action('First onClick')} />
      <Breadcrumb value="Second" onClick={action('Second onClick')} />
      <Breadcrumb value="Third" onClick={action('Third onClick')} />
      <Breadcrumb value="Fourth" onClick={action('Fourth onClick')} />
    </Breadcrumbs>
  ));
