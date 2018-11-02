import { addDecorator, setAddon, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { Wrapper } from '../Components/utils-ts';
import { checkA11y } from '@storybook/addon-a11y';
import JSXAddon from 'storybook-addon-jsx';

import * as React from 'react';
import * as PropTypes from 'prop-types';

// @ts-ignore
React.Fragment = ({ children }) => children;
React.Fragment.propTypes = {
  //@ts-ignoreyarn
  children: PropTypes.node.isRequired
};
React.Fragment.displayName = 'React.Fragment';

setAddon(JSXAddon);

addDecorator(checkA11y);
addDecorator(
  withInfo({
    inline: true
  })
);
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
