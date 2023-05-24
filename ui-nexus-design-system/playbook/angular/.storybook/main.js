const { addRemarkPlugins, resolveLibs } = require('../../../lib/webpack-util');
const codeImport = require('remark-code-import');

module.exports = {
  stories: [
    '../../stories/common/**/*.stories.tsx',
    '../../stories/pages/**/angular.stories.tsx'
  ],
  core: {
    builder: 'webpack5'
  },
  features: {
    buildStoriesJson: true,
    interactionsDebugger: true
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    '@storybook/addon-backgrounds',
    '@storybook/addon-jest',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    {
      name: "storybook-addon-turbo-build",
      options: {
        optimizationLevel: 1,
      },
    },
  ],
  staticDirs: ['../../../packages/nexus-angular/dist', '../../../.storybook', '../../../packages/nexus/src'],
  webpackFinal: (config) => {
    const plugin1 = addRemarkPlugins([codeImport])(config);
    const plugin2 = resolveLibs(plugin1);
    return plugin2;
  }
};