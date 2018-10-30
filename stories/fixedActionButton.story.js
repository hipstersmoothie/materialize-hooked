import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from './utils';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Button from '../src/materialize/button';
import Fab from '../src/materialize/fixedActionButton';

storiesOf('Components/FixedActionButton', module)
  .addDecorator(withKnobs)
  . addWithJSX('basic', () => (
    <Fab
      icon={text('icon', 'publish')}
      hoverEnabled={boolean('hoverEnabled', true)}
      direction={select(
        'direction',
        { top: 'top', left: 'left', right: 'right', bottom: 'bottom' },
        'top'
      )}
      toolbarEnabled={boolean('toolbarEnabled', false)}
      onClick={action('main button onCLick')}
    >
      <Button
        isFloating
        className="red"
        icon="insert_chart"
        onClick={action('red onCLick')}
      />
      <Button
        isFloating
        className="yellow darken-1"
        icon="format_quote"
        onClick={action('yellow onCLick')}
      />
      <Button
        isFloating
        className="green"
        icon="publish"
        onClick={action('green onCLick')}
      />
      <Button
        isFloating
        className="blue"
        icon="attach_file"
        onClick={action('blue onCLick')}
      />
    </Fab>
  ));
