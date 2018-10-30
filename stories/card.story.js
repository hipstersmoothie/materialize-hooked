import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Tabs, { Tab } from '../src/materialize/tabs';
import Card, { CardPanel } from '../src/materialize/card';

const styles = {
  margin: 'auto',
  maxWidth: 800
};
const DummyPage = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Components/Card', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  . addWithJSX('CardPanel', () => (
    <CardPanel className={text('className', 'teal white-text')}>
      {text(
        'content',
        'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      )}
    </CardPanel>
  ))
  . addWithJSX('basic', () => (
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
  . addWithJSX('with and image', () => (
    <div className="row">
      <div className="col s9">
        <Card
          isHorizontal={boolean('isHorizontal')}
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
  . addWithJSX('with and image with fab', () => (
    <div className="row">
      <div className="col s6">
        <Card
          title={text('title', 'Card Title')}
          image={text(
            'image',
            'https://materializecss.com/images/sample-1.jpg'
          )}
          fab={
            <a className="btn-large btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
          }
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
  . addWithJSX('with tabs', () => (
    <div className="row">
      <div className="col s6">
        <Card
          tabs={
            <Tabs isFixedWidth>
              <Tab link="#test1" text="Test 1" />
              <Tab link="#test2" text="Test 2" />
              <Tab link="#test3" text="Test 3" />
            </Tabs>
          }
          tabContent={
            <React.Fragment>
              <div id="test1">Test 1</div>
              <div id="test2">Test 2</div>
              <div id="test3">Test 3</div>
            </React.Fragment>
          }
        >
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </Card>
      </div>
    </div>
  ))
  . addWithJSX('reveal content', () => (
    <div className="row">
      <div className="col s6">
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
            <React.Fragment>
              <span className="card-title grey-text text-darken-4">
                Card Title
                <i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </React.Fragment>
          }
        >
          {text(
            'content',
            'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
          )}
        </Card>
      </div>
    </div>
  ));
