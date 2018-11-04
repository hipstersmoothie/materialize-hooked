import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { CardPanel } from '../Card/index';
import { createDummyPage, wInfo } from '../utils';

storiesOf('CSS/Helpers', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      'You can easily vertically center things by adding the class valign-wrapper to the container holding the items you want to vertically align.'
    )
  })
  .add('Vertical Align', () => (
    <CardPanel>
      <div className="valign-wrapper" style={{ height: 400 }}>
        <h5>This should be vertically aligned</h5>
      </div>
    </CardPanel>
  ))
  .addParameters({
    info: wInfo(
      'These classes are for horizontally aligning content: .left-align, .right-align and  .center-align.'
    )
  })
  .add('Text Align', () => (
    <div>
      <CardPanel>
        <h5 className="left-align">This should be left aligned</h5>
      </CardPanel>
      <CardPanel>
        <h5 className="right-align">This should be right aligned</h5>
      </CardPanel>
      <CardPanel>
        <h5 className="center-align">This should be center aligned</h5>
      </CardPanel>
    </div>
  ))
  .addParameters({
    info: wInfo(
      'We provide easy to use classes to hide/show content on specific screen sizes.'
    )
  })
  .add('Hiding/Showing Content', () => (
    <table className="striped">
      <thead>
        <tr>
          <th>Class</th>
          <th>Screen Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code className=" language-markup">.hide</code>
          </td>
          <td>Hidden for all Devices</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.hide-on-small-only</code>
          </td>
          <td>Hidden for Mobile Only</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.hide-on-med-only</code>
          </td>
          <td>Hidden for Tablet Only</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.hide-on-med-and-down</code>
          </td>
          <td>Hidden for Tablet and Below</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.hide-on-med-and-up</code>
          </td>
          <td>Hidden for Tablet and Above</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.hide-on-large-only</code>
          </td>
          <td>Hidden for Desktop Only</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.show-on-small</code>
          </td>
          <td>Show for Mobile Only</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.show-on-medium</code>
          </td>
          <td>Show for Tablet Only</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.show-on-large</code>
          </td>
          <td>Show for Desktop Only</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.show-on-medium-and-up</code>
          </td>
          <td>Show for Tablet and Above</td>
        </tr>
        <tr>
          <td>
            <code className=" language-markup">.show-on-medium-and-down</code>
          </td>
          <td>Show for Tablet and Below</td>
        </tr>
      </tbody>
    </table>
  ))
  .addParameters({
    info: wInfo(
      'To truncate long lines of text in an ellipsis, add the class truncate to the tag which contains the text. See an example below of a header being truncated inside a card.'
    )
  })
  .add('Truncation', () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <CardPanel>
        <h4 className="truncate">
          This is an extremely long title that will be truncated
        </h4>
      </CardPanel>
    </div>
  ))
  .addParameters({
    info: wInfo(
      'The hoverable is a `hover` class that adds an animation for box shadow as seen below. It can be used on most elements, but meant for use on cards.'
    )
  })
  .add('Hover', () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <CardPanel className="hoverable">Hover over me!</CardPanel>
    </div>
  ));
