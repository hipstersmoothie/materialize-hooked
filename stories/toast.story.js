import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Button from '../src/materialize/button';
import Toast from '../src/materialize/toast';

const styles = {};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Javascript/Toast', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Toast
      text={text('text', 'I am the toast!')}
      displayLength={number('displayLength', 4000)}
      inDuration={number('inDuration', 300)}
      outDuration={number('outDuration', 375)}
      classes={text('classes', 'rounded')}
      activationPercent={number('activationPercent', 0.8)}
    >
      {onClick => <Button text="Click me" onClick={onClick} />}
    </Toast>
  ));
