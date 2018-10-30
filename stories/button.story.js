import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Button from '../src/materialize/button';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Components/Button', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Button
      className={text('className', 'scale-transition scale-in')}
      text={text('text')}
      icon={text('icon', 'attach_file')}
      isPulsing={boolean('isPulsing')}
      isFlat={boolean('isFlat')}
      isFloating={boolean('isFloating')}
      isDisabled={boolean('isDisabled')}
      isLarge={boolean('isLarge')}
      isSmall={boolean('isSmall')}
      isSubmit={boolean('isSubmit')}
      isIconLeft={boolean('isIconLeft')}
      onClick={action('onClick')}
    />
  ));
