import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import { ModalWrapper as Modal } from './index';
import { wInfo } from '../utils-ts';

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

const LongParagraph = () => (
  <p>
    A bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch
    of text. A bunch of text. A bunch of text. A bunch of text. A bunch of text.
    A bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch
    of text. A bunch of text. A bunch of text. A bunch of text. A bunch of text.
    A bunch of text. A bunch of text. A bunch of text.A bunch of text. A bunch
    of text. A bunch of text. A bunch of text. A bunch of text. A bunch of text.
    A bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch
    of text. A bunch of text. A bunch of text. A bunch of text. A bunch of text.
    A bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch
    of text. A bunch of text.A bunch of text. A bunch of text. A bunch of text.
    A bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch
    of text. A bunch of text. A bunch of text. A bunch of text. A bunch of text.
    A bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch
    of text. A bunch of text. A bunch of text. A bunch of text. A bunch of
    text.A bunch of text. A bunch of text. A bunch of text. A bunch of text. A
    bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch of
    text. A bunch of text. A bunch of text. A bunch of text. A bunch of text. A
    bunch of text. A bunch of text. A bunch of text. A bunch of text. A bunch of
    text. A bunch of text. A bunch of text. A bunch of text.
  </p>
);

storiesOf('Javascript/Modal', module)
  .addDecorator(DummyPage)
  .addDecorator(withKnobs)
  .addParameters({
    info: wInfo(
      'Use a modal for dialog boxes, confirmation messages, or other content that can be called up. In order for the modal to work you have to add the Modal ID to the link of the trigger. To add a close button, just add the class  .modal-close to your button.',
      [LongParagraph]
    )
  })
  .addWithJSX('Basic', (fixedFooter = boolean('hasFixedFooter', false)) => (
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
          {fixedFooter && <LongParagraph />}
        </p>
      </div>
    </Modal>
  ))
  .addParameters({
    info: wInfo(
      'If you have content that is very long and you want the action buttons to be visible all the time, you can add the `hasFixedFooter` prop to the modal.',
      [LongParagraph]
    )
  })
  .addWithJSX('Modals with Fixed Footer', () => (
    <Modal
      id="modal1"
      hasFixedFooter
      footer={
        <div className="modal-footer">
          <a className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      }
    >
      <div className="tap-target-content">
        <h5>Title</h5>
        <LongParagraph />
        <LongParagraph />
        <LongParagraph />
        <LongParagraph />
        <LongParagraph />
      </div>
    </Modal>
  ))
  .addParameters({
    info: wInfo(
      'If you have content that is very long and you want the action buttons to be visible all the time, you can add the  modal-fixed-footer class to the modal.',
      [LongParagraph]
    )
  })
  .addWithJSX('Bottom Sheet Modals', () => (
    <Modal
      id="modal1"
      isBottomSheet
      hasFixedFooter
      footer={
        <div className="modal-footer">
          <a className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      }
    >
      <div className="tap-target-content">
        <h5>Title</h5>
        <LongParagraph />
        <LongParagraph />
        <LongParagraph />
        <LongParagraph />
        <LongParagraph />
      </div>
    </Modal>
  ));
