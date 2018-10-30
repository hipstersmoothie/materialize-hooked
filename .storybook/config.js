import { addDecorator, setAddon, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const ts = require.context('../stories', true, /.story.tsx$/);
const js = require.context('../stories', true, /.story.js$/);

addDecorator(withInfo);
addDecorator(
  withOptions({
    name: 'material-hooked',
    url: 'https://github.com/hipstersmoothie/material-hooked'
  })
);
addDecorator(
  withBackgrounds([
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'grey', value: 'grey' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' }
  ])
);

function loadStories() {
  ts.keys().forEach(filename => ts(filename));
  js.keys().forEach(filename => js(filename));
}

configure(loadStories, module);
