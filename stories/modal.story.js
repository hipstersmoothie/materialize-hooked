import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

// eslint-disable-next-line unicorn/import-index
import Modal from '../src/materialize/modal';

const styles = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const DummyPage = storyFn => {
  return (
    <div style={styles}>
      <React.Fragment>
        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Open
        </a>
        {storyFn()}
      </React.Fragment>
    </div>
  );
};

storiesOf('Javascript/Modal', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addWithJSX('basic', (fixedFooter = boolean('hasFixedFooter')) => (
    <Modal
      id="modal1"
      hasFixedFooter={fixedFooter}
      isBottomSheet={boolean('isBottomSheet')}
      opacity={number('opacity', 0.5)}
      inDuration={number('inDuration', 250)}
      outDuration={number('outDuration', 250)}
      preventScrolling={boolean('preventScrolling', true)}
      dismissible={boolean('dismissible', true)}
      startingTop={text('startingTop', '4%')}
      endingTop={text('endingTop', '10%')}
      footer={
        (boolean('footer') || fixedFooter) && (
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
