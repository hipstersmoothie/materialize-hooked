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

function loadStories() {
  // Components
  require('../Components/Badge/badge.story');
  require('../Components/Button/button.story');
  require('../Components/Breadcrumbs/breadcrumbs.story');
  require('../Components/Card/card.story');
  require('../Components/Collection/collection.story');
  require('../Components/FloatingActionButton/floatingActionButton.story');
  require('../Components/Footer/footer.story');
  require('../Components/Icon/icon.story');
  require('../Components/NavBar/navBar.story');
  require('../Components/Pagination/pagination.story');
  require('../Components/Preloader/preloader.story');

  // // Javascript
  require('../Components/Carousel/carousel.story');
  require('../Components/Collapsible/collapsible.story');
  require('../Components/Dropdown/dropdown.story');
  require('../Components/FeatureDiscovery/featureDiscovery.story');
  // require('../Components/MaterialBox/materialBox.story');
  // require('../Components/Slider/slider.story');
  // require('../Components/Modal/modal.story');
  // require('../Components/Parallax/parallax.story');
  // require('../Components/PushPin/pushPin.story');
  // require('../Components/ScrollSpy/scrollSpy.story');
  require('../Components/Tabs/tabs.story');
  // require('../Components/Toast/toast.story');
  // require('../Components/Tooltip/tooltip.story');

  // // Forms
  // require('../Components/Autocomplete/autocomplete.story');
  // require('../Components/CheckBox/checkBox.story');
  // require('../Components/Chip/chip.story');
  // require('../Components/ChipInput/chipInput.story');
  // require('../Components/DatePicker/datepicker.story');
  // require('../Components/Input/input.story');
  // require('../Components/RadioButton/radioButton.story');
  // require('../Components/Range/range.story');
  // require('../Components/Select/select.story');
  // require('../Components/Switch/switch.story');
  // require('../Components/TimePicker/timePicker.story');
}

configure(loadStories, module);
