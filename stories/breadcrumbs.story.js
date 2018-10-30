import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Breadcrumbs, { Breadcrumb } from '../src/materialize/breadcrumbs';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Components/Breadcrumbs', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Breadcrumbs>
      <Breadcrumb value="First" onClick={action('First onClick')} />
      <Breadcrumb value="Second" onClick={action('Second onClick')} />
      <Breadcrumb value="Third" onClick={action('Third onClick')} />
      <Breadcrumb value="Fourth" onClick={action('Fourth onClick')} />
    </Breadcrumbs>
  ));
