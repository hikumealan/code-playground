const path = require('path');

const checkTests = (sample, testsRegexp) => {
  // If single test, testsRegexp will be a RegExp and can be tested directly
  if (testsRegexp instanceof RegExp) {
    return testsRegexp.test(sample);
  }

  // If multiple tests, testsRegexp will be an array, check for any to match
  if (testsRegexp instanceof Array) {
    return testsRegexp.some((test) => test.test(sample));
  }

  // testsRegexp is untestable, assume no match
  return false;
};

const findStoriesRule = (rules) => rules.find((rule) => {
  const storyFile = 'example.stories.mdx';

  if (rule.exclude && checkTests(storyFile, rule.exclude)) {
    return false;
  }

  return checkTests(storyFile, rule.test);
});

const findStoriesMdxLoader = (config) => {
  const mdxRule = findStoriesRule(config.module.rules);

  if (!mdxRule) {
    return config;
  }

  return mdxRule.use.find((loader) => (/@mdx-js\/loader/).test(loader.loader));
};

const addRemarkPlugins = (plugins) => (config) => {
  const mdxLoader = findStoriesMdxLoader(config);

  if (!mdxLoader) {
    return config;
  }

  mdxLoader.options = mdxLoader.options || {};
  mdxLoader.options.remarkPlugins = mdxLoader.options.remarkPlugins || [];
  mdxLoader.options.remarkPlugins = [
    ...mdxLoader.options.remarkPlugins,
    ...plugins
  ];

  return config;
};

const resolveLibs = (config) => {
  const libPath = path.join(__dirname, '../packages/nexus-angular/projects/nexus-angular/src/public-api.ts');
  config.resolve.alias['@nexus/nexus-angular'] = libPath;

  return config;
};

module.exports = {
  addRemarkPlugins,
  resolveLibs
};
