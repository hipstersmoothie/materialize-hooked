import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import Modal from './index';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const DummyPage: StoryDecorator = storyFn => {
  return (
    <div style={styles}>
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Open
        </a>
        {storyFn()}
      </>
    </div>
  );
};

storiesOf('Javascript/Modal', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', (fixedFooter = boolean('hasFixedFooter', false)) => (
    <Modal
      id="modal1"
      hasFixedFooter={fixedFooter}
      isBottomSheet={boolean('isBottomSheet', false)}
      opacity={number('opacity', 0.5)}
      inDuration={number('inDuration', 250)}
      outDuration={number('outDuration', 250)}
      preventScrolling={boolean('preventScrolling', true)}
      dismissible={boolean('dismissible', true)}
      startingTop={text('startingTop', '4%')}
      endingTop={text('endingTop', '10%')}
      footer={
        (boolean('footer', false) || fixedFooter) && (
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        )
      }
    >
      <div className="tap-target-content">
        <h5>Title</h5>
        <p>
          A bunch of text. A bunch of text. A bunch of text. A bunch of text. A
          bunch of text. A bunch of text. A bunch of text. A bunch of text. A
          bunch of text. A bunch of text. A bunch of text. A bunch of text. A
          bunch of text. A bunch of text. A bunch of text. A bunch of text. A
          bunch of text. A bunch of text. A bunch of text. A bunch of text. A
          bunch of text.
          {fixedFooter && (
            <p>
              A bunch of text. A bunch of text. A bunch of text. A bunch of
              text. A bunch of text. A bunch of text. A bunch of text. A bunch
              of text. A bunch of text. A bunch of text. A bunch of text. A
              bunch of text. A bunch of text. A bunch of text. A bunch of text.
              A bunch of text. A bunch of text. A bunch of text. A bunch of
              text. A bunch of text. A bunch of text.A bunch of text. A bunch of
              text. A bunch of text. A bunch of text. A bunch of text. A bunch
              of text. A bunch of text. A bunch of text. A bunch of text. A
              bunch of text. A bunch of text. A bunch of text. A bunch of text.
              A bunch of text. A bunch of text. A bunch of text. A bunch of
              text. A bunch of text. A bunch of text. A bunch of text. A bunch
              of text.A bunch of text. A bunch of text. A bunch of text. A bunch
              of text. A bunch of text. A bunch of text. A bunch of text. A
              bunch of text. A bunch of text. A bunch of text. A bunch of text.
              A bunch of text. A bunch of text. A bunch of text. A bunch of
              text. A bunch of text. A bunch of text. A bunch of text. A bunch
              of text. A bunch of text. A bunch of text.A bunch of text. A bunch
              of text. A bunch of text. A bunch of text. A bunch of text. A
              bunch of text. A bunch of text. A bunch of text. A bunch of text.
              A bunch of text. A bunch of text. A bunch of text. A bunch of
              text. A bunch of text. A bunch of text. A bunch of text. A bunch
              of text. A bunch of text. A bunch of text. A bunch of text. A
              bunch of text.
            </p>
          )}
        </p>
      </div>
    </Modal>
  ));
