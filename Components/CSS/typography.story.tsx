import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { CardPanel } from '../Card/index';
import { createDummyPage, wInfo } from '../utils';

storiesOf('CSS/Typography', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      "We provide some basic styling on header tags. In the example, you can see the the 6 header tags' different sizes."
    )
  })
  .add('Headers', () => (
    <CardPanel>
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
      <h3>Heading h3</h3>
      <h4>Heading h4</h4>
      <h5>Heading h5</h5>
      <h6>Heading h6</h6>
    </CardPanel>
  ))
  .addParameters({
    info: wInfo(
      'Blockquotes are mainly used to give emphasis to a quote or citation. You can also use these for some extra text hierarchy and emphasis.'
    )
  })
  .add('Blockquotes', () => (
    <blockquote>
      This is an example quotation that uses the blockquote tag.
    </blockquote>
  ))
  .addParameters({
    info: wInfo(
      'To use flow-text on a body of text, simply just add the class flow-text to a component.'
    )
  })
  .add('Flow Text', () => (
    <CardPanel className="flow-text">
      <p>
        One common flaw we've seen in many frameworks is a lack of support for
        truly responsive text. While elements on the page resize fluidly, text
        still resizes on a fixed basis. To ameliorate this problem, for text
        heavy pages, we've created a class that fluidly scales text size and
        line-height to optimize readability for the user. Line length stays
        between 45-80 characters and line height scales to be larger on smaller
        screens.
      </p>

      <p>
        To see Flow Text in action, slowly resize your browser and watch the
        size of this text body change! Use the button above to toggle off/on
        flow-text to see the difference!
      </p>
    </CardPanel>
  ));
