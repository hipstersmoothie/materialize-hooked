import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

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
  .add('basic', () => (
    <Badge
      isNew={boolean('isNew', true)}
      value={text('value', '1')}
      className={text('className', 'red')}
      caption={text('caption', '')}
    />
  ));
