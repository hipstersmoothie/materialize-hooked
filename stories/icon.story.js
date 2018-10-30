import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Icon from '../src/materialize/icon';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Components/Icon', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Icon
      icon={text('icon', 'publish')}
      isTiny={boolean('isTiny', false)}
      isSmall={boolean('isSmall', false)}
      isMedium={boolean('isMedium', false)}
      isLarge={boolean('isLarge', false)}
    />
  ));
