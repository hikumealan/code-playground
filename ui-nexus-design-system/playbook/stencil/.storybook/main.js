const { addRemarkPlugins, resolveLibs } = require('../../../lib/webpack-util');
const codeImport = require('remark-code-import');

module.exports = {
  stories: [
    '../../stories/pages/**/stencil.stories.tsx',
    '../../stories/common/**/*.stories.tsx',
  ],
  features: {
    buildStoriesJson: true,
    interactionsDebugger: true
  },
  core: {
    builder: 'webpack5'
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
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
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
  ],
  staticDirs: ['../../../packages/nexus/dist', '../../../.storybook'],
  webpackFinal: (config) => {
    const plugin1 = addRemarkPlugins([codeImport])(config);
    const plugin2 = resolveLibs(plugin1);

    return plugin2;
  }
};