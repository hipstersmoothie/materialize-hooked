import React from 'react';
import PropTypes from 'prop-types';
import { unstable_createResource as createResource } from 'react-cache';

console.log(createResource);
export const StylesheetResource = createResource(
  loadStyleSheet,
  ({ href, media }) => `${href}.${media}`
);

function loadStyleSheet({ href, media = 'all' }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = media;
      link.addEventListener('load', resolve);
      link.addEventListener('error', reject);
      document.body.appendChild(link);
    }, 5000);
  });
}

const swatches = [
  'default',
  'cerulean',
  'cosmo',
  'cyborg',
  'darkly',
  'flatly',
  'journal',
  'litera',
  'lumen',
  'lux',
  'materia',
  'minty',
  'nuclear',
  'pulse',
  'sandstone',
  'simplex',
  'slate',
  'solar',
  'spacelab',
  'superhero',
  'united',
  'yeti'
];

export const useBulmaSwatch = (swatch = 'default') => {
  if (swatch === 'random') {
    swatch = swatches[Math.floor(Math.random() * swatches.length)];
  }

  StylesheetResource.read({
    href: `https://jenil.github.io/bulmaswatch/${swatch}/bulmaswatch.min.css`
  });
};

export const BulmaApp = ({ swatch, random, children }) => {
  if (random) {
    useBulmaSwatch();
  } else {
    useBulmaSwatch(swatch);
  }

  return <React.Fragment>{children}</React.Fragment>;
};

BulmaApp.propTypes = {
  children: PropTypes.node.isRequired,
  random: PropTypes.bool,
  swatch: PropTypes.oneOf(swatches)
};

BulmaApp.defaultProps = {
  random: false,
  swatch: 'default'
};
