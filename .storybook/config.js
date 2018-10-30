import { addDecorator, setAddon, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const ts = require.context('../stories', true, /.story.tsx$/);
const js = require.context('../stories', true, /.story.js$/);

addDecorator(
  withOptions({
    name: 'material-hooked',
    url: 'https://github.com/hipstersmoothie/material-hooked'
  })
);

function loadStories() {
  ts.keys().forEach(filename => ts(filename));
  js.keys().forEach(filename => js(filename));
}

configure(loadStories, module);
