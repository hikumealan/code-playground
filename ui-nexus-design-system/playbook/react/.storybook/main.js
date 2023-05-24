const { addRemarkPlugins, resolveLibs } = require('../../../lib/webpack-util');
const codeImport = require('remark-code-import');

module.exports = {
  stories: [
    '../../stories/common/**/*.stories.tsx',
    '../../stories/pages/**/react.stories.tsx'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  features: {
    buildStoriesJson: true,
    interactionsDebugger: true,
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
  ],
  staticDirs: [
    '../../../packages/nexus-react/dist',
    '../../../.storybook',
    '../../../packages/nexus/src'
  ],
  webpackFinal: (config) => {
    const plugin1 = addRemarkPlugins([codeImport])(config);
    const plugin2 = resolveLibs(plugin1);

    return plugin2;
  }
};