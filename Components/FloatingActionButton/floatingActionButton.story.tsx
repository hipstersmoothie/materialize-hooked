import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, wInfo } from '../utils-ts';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Button from '../Button';
import Fab from '.';

storiesOf('Components/FloatingActionButton', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.',
      [Button]
    )
  })
  .addWithJSX('Basic', () => (
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
  ))
  .addParameters({
    info: wInfo(
      'Creating a horizontal FAB is easy! Just set the direction option.',
      [Button]
    )
  })
  .addWithJSX('Horizontal FAB', () => (
    <Fab
      icon={text('icon', 'publish')}
      direction="left"
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
  ))
  .addParameters({
    info: wInfo(
      'If you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), just add the  click-to-toggle class to the FAB.',
      [Button]
    )
  })
  .addWithJSX('Click-only FAB', () => (
    <Fab
      icon={text('icon', 'publish')}
      hoverEnabled={false}
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
  ))
  .addParameters({
    info: wInfo(
      'Instead of displaying individual button options, you can transition your FAB into a toolbar on click. Just add the  toolbar class to the FAB.',
      [Button]
    )
  })
  .addWithJSX('FAB to Toolbar', () => (
    <Fab
      toolbarEnabled
      icon={text('icon', 'publish')}
      onClick={action('main button onCLick')}
      className="red"
    >
      <Button
        isFloating
        className="red"
        icon="insert_chart"
        onClick={action('red onCLick')}
      />
      <Button
        isFloating
        className="red"
        icon="format_quote"
        onClick={action('yellow onCLick')}
      />
      <Button
        isFloating
        className="red"
        icon="publish"
        onClick={action('green onCLick')}
      />
      <Button
        isFloating
        className="red"
        icon="attach_file"
        onClick={action('blue onCLick')}
      />
    </Fab>
  ));
