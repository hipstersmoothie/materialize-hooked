import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from './utils';

storiesOf('Welcome', module)
  .addParameters({
    options: { showAddonPanel: false },
    info: wInfo(
      `
      \`materialize-hooked\` is a react component library built on [materialize.css](https://materializecss.com/). It implements all of the components supported by \`materialize.css\` using the new [react hooks API](https://reactjs.org/docs/hooks-intro.html)

      To use \`materialize-hooked\` you must have at least react@16.7.0-alpha.0.

      ### Install

      \`\`\`sh
      yarn install materialized-hooked
      \`\`\`

      ### Usage

      To use most of the components all you have to do is import the desired component and \`materialize-hooked\` handles the rest.

      \`\`\`
      import Button from 'materialize-hooked/Button';

      const Page = () => (
        <div>
          <h1>Look at my cool button</h1>

          <Button value='Click me!' />
        </div>
      )
      \`\`\`
      `,
      undefined,
      { source: false }
    )
  })
  .add('Introduction', () => <div />);
