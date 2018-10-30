import { addDecorator, setAddon, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';

addDecorator(
  withOptions({
    name: 'material-hooked',
    url: 'https://github.com/hipstersmoothie/material-hooked'
  })
);
setAddon(JSXAddon);

function loadStories() {
  require('../stories/autocomplete.story.js');
  require('../stories/badge.story.js');
  require('../stories/breadcrumbs.story.js');
  require('../stories/button.story.js');
  require('../stories/card.story.js');
  require('../stories/carousel.story.js');
  require('../stories/checkBox.story.js');
  require('../stories/chip.story.js');
  require('../stories/chipInput.story.js');
  require('../stories/collapsible.story.js');
  require('../stories/collection.story.js');
  require('../stories/datepicker.story.js');
  require('../stories/dropdown.story.js');
  require('../stories/featureDiscovery.story.js');
  require('../stories/fixedActionButton.story.js');
  require('../stories/footer.story.js');
  require('../stories/icon.story.js');
  require('../stories/input.story.js');
  require('../stories/media.story.js');
  require('../stories/modal.story.js');
  require('../stories/nav.story.js');
  require('../stories/pagination.story.js');
  require('../stories/parallax.story.js');
  require('../stories/preloader.story.js');
  require('../stories/pushpin.story.js');
  require('../stories/radiobutton.story.js');
  require('../stories/range.story.js');
  require('../stories/select.story.js');
  require('../stories/scrollspy.story.js');
  require('../stories/switch.story.js');
  require('../stories/tabs.story.js');
  require('../stories/timePicker.story.js');
  require('../stories/toast.story.js');
  require('../stories/tooltip.story.js');
}

configure(loadStories, module);
