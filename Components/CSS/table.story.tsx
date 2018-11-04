import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createDummyPage, wInfo } from '../utils';

const Table = ({ className }: { className?: string }) => (
  <table className={className}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Item Name</th>
        <th>Item Price</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Alvin</td>
        <td>Eclair</td>
        <td>$0.87</td>
      </tr>
      <tr>
        <td>Alan</td>
        <td>Jellybean</td>
        <td>$3.76</td>
      </tr>
      <tr>
        <td>Jonathan</td>
        <td>Lollipop</td>
        <td>$7.00</td>
      </tr>
      <tr>
        <td>Shannon</td>
        <td>KitKat</td>
        <td>$9.99</td>
      </tr>
    </tbody>
  </table>
);

storiesOf('CSS/Table', module)
  .addDecorator(
    createDummyPage({
      margin: 'auto',
      maxWidth: 800
    })
  )
  .addParameters({
    info: wInfo(
      'Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style your table as easily as possible. In addition, to improve mobile experience, all tables on mobile-screen widths are centered automatically.'
    )
  })
  .add('Basic', () => <Table />)
  .addParameters({
    info: wInfo(
      'Add className="highlight" to the table tag for a highlight table.'
    )
  })
  .add('Highlight Table', () => <Table className="highlight" />)
  .addParameters({
    info: wInfo(
      'Add className="centered" to the table tag to center align all the text in the table'
    )
  })
  .add('Centered Table', () => <Table className="centered" />)
  .addParameters({
    info: wInfo(
      'Add className="responsive-table" to the table tag to make the table horizontally scrollable on smaller screen widths.'
    )
  })
  .add('Responsive Table', () => <Table className="responsive-table" />);
