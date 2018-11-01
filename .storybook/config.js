import { addDecorator, setAddon, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { Wrapper } from '../Components/utils-ts';
import JSXAddon from 'storybook-addon-jsx';

import * as React from 'react';
import * as PropTypes from 'prop-types';

// @ts-ignore
React.Fragment = ({ children }) => children;
React.Fragment.propTypes = {
  //@ts-ignore
  children: PropTypes.node.isRequired
};
React.Fragment.displayName = 'React.Fragment';

setAddon(JSXAddon);

addDecorator(
  withInfo({ inline: true, propTablesExclude: [Wrapper, React.Fragment] })
);
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

const stories = require.context('..', true, /.story\.tsx?$/);

function loadStories() {
  // Components
  stories.keys().forEach(key => {
    if (Components.find(Component => key.includes(Component))) {
      stories(key);
    }
  });

  // // Javascript
  // Components
  stories.keys().forEach(key => {
    if (Javascript.find(Component => key.includes(Component))) {
      stories(key);
    }
  });

  // // Forms
  // require('./Components/Autocomplete/autocomplete.story');
  // require('./Components/CheckBox/checkBox.story');
  // require('./Components/Chip/chip.story');
  // require('./Components/ChipInput/chipInput.story');
  // require('./Components/DatePicker/datepicker.story');
  // require('./Components/Input/input.story');
  // require('./Components/RadioButton/radioButton.story');
  // require('./Components/Range/range.story');
  // require('./Components/Select/select.story');
  // require('./Components/Switch/switch.story');
  // require('./Components/TimePicker/timePicker.story');
}

configure(loadStories, module);
