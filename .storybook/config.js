const { addDecorator, setAddon, configure } = require('@storybook/react');
const { withOptions } = require('@storybook/addon-options');
const { withInfo } = require('@storybook/addon-info');
const { withBackgrounds } = require('@storybook/addon-backgrounds');
const { checkA11y } = require('@storybook/addon-a11y');

const React = require('react');

// @ts-ignore
React.Fragment = ({ children }) => children;
React.Fragment.propTypes = {};
React.Fragment.displayName = 'React.Fragment';

addDecorator(checkA11y);

if (process.env.NODE_ENV !== 'test') {
  addDecorator(
    withInfo({
      inline: true
    })
  );
}

addDecorator(
  withOptions({
    name: 'materialize-hooked',
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

const Components = [
  'Badge',
  'Button',
  'Breadcrumbs',
  'Card',
  'Collection',
  'FloatingActionButton',
  'Footer',
  'Icon',
  'NavBar',
  'Pagination',
  'Preloader'
];

const Javascript = [
  'Carousel',
  'Collapsible',
  'Dropdown',
  'FeatureDiscovery',
  'MaterialBox',
  'Slider',
  'Modal',
  'Parallax',
  'PushPin',
  'ScrollSpy',
  'Tabs',
  'Toast',
  'Tooltip'
];

const Form = [
  'Autocomplete',
  'CheckBox',
  'Chip',
  'ChipInput',
  'DatePicker',
  'Input',
  'RadioButton',
  'Range',
  'Select',
  'Switch',
  'TimePicker'
];

const stories = require.context('..', true, /.story\.tsx?$/);

function loadStories() {
  require('../Components/welcome.story');

  // CSS
  stories.keys().forEach(key => {
    if (key.includes('CSS') || key.includes('Scale')) {
      stories(key);
    }
  });

  // Components
  stories.keys().forEach(key => {
    if (Components.find(Component => key.includes(Component))) {
      stories(key);
    }
  });

  // Javascript
  stories.keys().forEach(key => {
    if (Javascript.find(Component => key.includes(Component))) {
      stories(key);
    }
  });

  // Form
  stories.keys().forEach(key => {
    if (Form.find(Component => key.includes(Component))) {
      stories(key);
    }
  });
}

configure(loadStories, module);
