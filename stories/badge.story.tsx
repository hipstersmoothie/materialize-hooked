import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';

import Badge from '../src/materialize/badge';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage: StoryDecorator = storyFn => (
  <div style={styles}>{storyFn()}</div>
);

storiesOf('Components/Badge', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
    <Badge
      isNew={boolean('isNew', true)}
      value={number('value', 1)}
      className={text('className', 'red')}
      caption={text('caption', '')}
    />
  ));
