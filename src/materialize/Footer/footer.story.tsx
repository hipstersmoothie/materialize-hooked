import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { createDummyPage } from '../../../stories/utils-ts';
import Footer, { FooterBody } from '.';

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addWithJSX('plain', () => (
    <Footer>
      <FooterBody
        title={text('title', 'Title')}
        description={text(
          'description',
          'I am a very simple footer. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
        )}
        links={[
          ['Google', 'google.com'],
          ['Facebook', 'facebook.com'],
          ['Twiiter', 'twitter.com']
        ]}
      />
    </Footer>
  ))
  .addWithJSX('with copyright', () => (
    <Footer year="2018" copyrightText="Andrew Lisowski">
      <FooterBody
        title={text('title', 'Title')}
        description={text(
          'description',
          'I am a very simple footer. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
        )}
        links={[
          ['Google', 'google.com'],
          ['Facebook', 'facebook.com'],
          ['Twiiter', 'twitter.com']
        ]}
      />
    </Footer>
  ));
