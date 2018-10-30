import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, select } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Tooltip from '../src/materialize/tooltip';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;
const positions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

storiesOf('Javascript/Tooltip', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Tooltip
      className="waves-effect waves-light"
      position={select('position', positions, 'top')}
      text={text('text', 'Tooltip Text')}
      exitDelay={number('exitDelay', 0)}
      enterDelay={number('enterDelay', 200)}
      html={text('html', null)}
      margin={number('margin', 5)}
      inDuration={number('inDuration', 300)}
      outDuration={number('outDuration', 250)}
      transitionMovement={number('transitionMovement', 10)}
    >
      Hover me!
    </Tooltip>
  ));
