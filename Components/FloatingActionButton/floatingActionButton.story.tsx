import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '../utils-ts';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Button from '../Button';
import Fab from '.';

storiesOf('Components/FloatingActionButton', module)
  .addDecorator(withKnobs)
  .addWithJSX('basic', () => (
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
