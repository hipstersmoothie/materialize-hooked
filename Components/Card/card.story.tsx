import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Card, { CardPanel } from '.';
import Button from '../Button';
import Tabs, { Tab } from '../Tabs';
import { createDummyPage, wInfo } from '../utils';

// prettier-ignore
const dog = 'data:image/jpeg;base64,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';

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
  .add('Basic', () => (
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
  .add('Image Card', () => (
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
  .add('FABs in Cards', () => {
    const hasLargeFab = boolean('hasLargeFab', false);

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
  .add('Horizontal Card', () => (
    <Card
      isHorizontal
      image={dog}
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
  .add('Card Reveal', () => (
    <div className="row">
      <div className="col s6 offset-s3">
        <Card
          image={text('image', dog)}
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
  .add('Tabs in Cards', () => (
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
  .add('Card Sizes', () => (
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
  .add('Card Panel', () => (
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
