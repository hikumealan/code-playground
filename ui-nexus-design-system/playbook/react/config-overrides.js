const { override, addBabelPlugin } = require('customize-cra');

module.exports = (config, ...rest) => {
  /* Simply clones the object */
  const overriddenConfig = Object.assign(config, {});

  /* Remove the last item from the resolve plugins array. This should be ModuleScopePlugin */
  overriddenConfig.resolve.plugins.pop();

  return Object.assign(
    overriddenConfig,
    override(
      addBabelPlugin([
        'module-resolver',
        {
          root: '../packages'
        }
      ])
    )(overriddenConfig, ...rest)
  );
};
