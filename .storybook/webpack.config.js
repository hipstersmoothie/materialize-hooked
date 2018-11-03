const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  const imageLoader = config.module.rules.find(
    rule => rule.loader && rule.loader.includes('file-loader')
  );

  if (imageLoader) {
    imageLoader.exclude = /_image_snapshots_\/.*\.png/;
  }

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: [
      require.resolve('awesome-typescript-loader'),
      require.resolve('react-docgen-typescript-loader')
    ]
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./')
  ];

  return config;
};
