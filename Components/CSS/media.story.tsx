import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createDummyPage, wInfo } from '../utils';

storiesOf('CSS/Image', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      `
      To make images resize responsively to page width, you can add the class responsive-img to your image tag. It will now have a max-width: 100% and height:auto.

      To make images appear circular, simply add className="circle" to them.
      `
    )
  })
  .add('Images', () => (
    <div className="row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper" style={{ marginBottom: 0 }}>
            <div className="col s2">
              <img
                src="https://materializecss.com/images/yuna.jpg "
                alt=""
                className="responsive-img"
              />
            </div>
            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it
                appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper" style={{ marginBottom: 0 }}>
            <div className="col s2">
              <img
                src="https://materializecss.com/images/yuna.jpg "
                alt=""
                className="circle responsive-img"
              />
            </div>
            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it
                appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf('CSS/Videos', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      'To make your embeds responsive, merely wrap them with a containing div which has the className video-container'
    )
  })
  .add('Videos - Embed', () => (
    <div className="video-container">
      <iframe
        width={853}
        height={480}
        src="https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
        // @ts-ignore
        frameborder={0}
        // tslint:disable-next-line
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  ))
  .addParameters({
    info: wInfo(
      'To make your HTML5 Videos responsive just add the className responsive-video to the video tag.'
    )
  })
  .add('Videos - HTML', () => (
    <video
      controls
      className="video-stream"
      x-webkit-airplay="allow"
      data-youtube-id="iF83wwij828"
      poster="https://github.com/mediaelement/mediaelement-files/blob/master/big_buck_bunny.jpg?raw=true"
      src="https://github.com/mediaelement/mediaelement-files/raw/master/big_buck_bunny.mp4"
    />
  ));
