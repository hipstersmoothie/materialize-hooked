import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createDummyPage, wInfo } from '../utils';

storiesOf('CSS/Shadow', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      `
      In material design, everything should have a certain z-depth that determines how far raised or close to the page the element is.

      You can easily apply this shadow effect by adding a className="z-depth-2" (or className for components) to an HTML tag. Alternatively you can extend any of these shadows with Sass using @extend .z-depth-2. A  z-depth-0 can be used to remove shadows from elements that have z-depths by default.
      `
    )
  })
  .add('Headers', () => (
    <div className="row">
      <div className="col s12 m2 l2">
        <p className="z-depth-1" style={{ height: 100, width: 100 }}>
          z-depth-1
        </p>
      </div>
      <div className="col s12 m2 l2">
        <p className="z-depth-2" style={{ height: 100, width: 100 }}>
          z-depth-2
        </p>
      </div>
      <div className="col s12 m2 l2">
        <p className="z-depth-3" style={{ height: 100, width: 100 }}>
          z-depth-3
        </p>
      </div>
      <div className="col s12 m2 l2">
        <p className="z-depth-4" style={{ height: 100, width: 100 }}>
          z-depth-4
        </p>
      </div>
      <div className="col s12 m2">
        <p className="z-depth-5" style={{ height: 100, width: 100 }}>
          z-depth-5
        </p>
      </div>
    </div>
  ));
