import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { createDummyPage, wInfo } from '../utils-ts';
import Tabs, { Tab } from '../Tabs';
import Card, { CardPanel } from '.';
import Button from '../Button';

storiesOf('Components/Card', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.'
    )
  })
  .addWithJSX('Basic', () => (
    <Card
      title={text('title', 'Card Title')}
      isSmall={boolean('isSmall', false)}
      isMedium={boolean('isMedium', false)}
      isLarge={boolean('isLarge', false)}
      actions={
        <span>
          <a>This is a link</a>
          <a>This is a link</a>
        </span>
      }
    >
      {text(
        'content',
        'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      )}
    </Card>
  ))
  .addParameters({
    info: wInfo('Here is the standard card with an image thumbnail.')
  })
  .addWithJSX('Image Card', () => (
    <div className="row">
      <div className="col s9">
        <Card
          isHorizontal={boolean('isHorizontal', false)}
          title={text('title', 'Card Title')}
          isSmall={boolean('isSmall', false)}
          isMedium={boolean('isMedium', false)}
          isLarge={boolean('isLarge', false)}
          image={text(
            'image',
            'https://materializecss.com/images/sample-1.jpg'
          )}
          actions={
            <span>
              <a>This is a link</a>
              <a>This is a link</a>
            </span>
          }
        >
          {text(
            'content',
            'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          )}
        </Card>
      </div>
    </div>
  ))
  .addParameters({
    info: wInfo('Here is an image card with a Floating Action Button.')
  })
  .addWithJSX('FABs in Cards', () => {
    const hasLargeFab = boolean('hasLargeFab', false);
    console.log(hasLargeFab);
    return (
      <div className="row">
        <div className="col s6">
          <Card
            title={text('title', 'Card Title')}
            image={text(
              'image',
              'https://materializecss.com/images/sample-1.jpg'
            )}
            fab={
              <Button
                isLarge={hasLargeFab}
                isFloating
                withWaves
                className="halfway-fab red"
                icon="add"
              />
            }
            hasLargeFab={hasLargeFab}
            actions={
              <span>
                <a>This is a link</a>
                <a>This is a link</a>
              </span>
            }
          >
            {text(
              'content',
              'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
            )}
          </Card>
        </div>
      </div>
    );
  })
  .addParameters({
    info: wInfo('Here is the standard card with a horizontal image.')
  })
  .addWithJSX('Horizontal Card', () => (
    <Card
      isHorizontal
      image="https://lorempixel.com/100/190/nature/6"
      actions={
        <span>
          <a>This is a link</a>
        </span>
      }
    >
      {text(
        'content',
        'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      )}
    </Card>
  ))
  .addParameters({
    info: wInfo(
      'Here you can add a card that reveals more information once clicked. Just add the `card-reveal` div with a `span.card-title` inside to make this work. Add the class `activator` to an element inside the card to allow it to open the card reveal.'
    )
  })
  .addWithJSX('Card Reveal', () => (
    <div className="row">
      <div className="col s6 offset-s3">
        <Card
          image={text(
            'image',
            'https://materializecss.com/images/sample-1.jpg'
          )}
          title={text('title', 'Card Title')}
          stickyAction={boolean('stickyAction', false)}
          actions={
            <span>
              <a>This is a link</a>
              <a>This is a link</a>
            </span>
          }
          reveal={
            <>
              <span className="card-title grey-text text-darken-4">
                Card Title
                <i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </>
          }
        >
          {text(
            'content',
            'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          )}
        </Card>
      </div>
    </div>
  ))
  .addParameters({
    info: wInfo('You can add tabs to your cards.')
  })
  .addWithJSX('Tabs in Cards', () => (
    <div className="row">
      <div className="col s6 offset-s3">
        <Card
          tabs={
            <Tabs
              isFixedWidth
              content={
                <div className="card-content">
                  <div id="test1">Test 1</div>
                  <div id="test2">Test 2</div>
                  <div id="test3">Test 3</div>
                </div>
              }
            >
              <Tab link="#test1" text="Test 1" />
              <Tab link="#test2" text="Test 2" />
              <Tab link="#test3" text="Test 3" />
            </Tabs>
          }
        >
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </Card>
      </div>
    </div>
  ))
  .addParameters({
    info: wInfo(
      'If you want to have uniformly sized cards, you can use our premade size classes. Just add the size class in addition to the card class.'
    )
  })
  .addWithJSX('Card Sizes', () => (
    <div className="row">
      <div className="col s6 offset-s3">
        <Card
          image="https://materializecss.com/images/sample-1.jpg"
          isSmall={boolean('isSmall', false)}
          isMedium={boolean('isMedium', false)}
          isLarge={boolean('isLarge', false)}
          actions={
            <span>
              <a>This is a link</a>
              <a>This is a link</a>
            </span>
          }
        >
          {text(
            'content',
            'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          )}
        </Card>
      </div>
    </div>
  ))
  .addParameters({
    info: wInfo(
      'For a simpler card with less markup, try using a card panel which just has padding and a shadow effect.'
    )
  })
  .addWithJSX('Card Panel', () => (
    <div className="row">
      <div className="col s6 offset-s3">
        <CardPanel className={text('className', 'teal white-text')}>
          {text(
            'content',
            'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          )}
        </CardPanel>
      </div>
    </div>
  ));
