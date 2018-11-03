import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Footer, { FooterBody } from '.';
import { createDummyPage, wInfo } from '../utils';

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      'Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once they have finished scrolling through the current page or are looking for additional information about your website.'
    )
  })
  .add('Basic', () => (
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
  .add('With Copyright', () => (
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
