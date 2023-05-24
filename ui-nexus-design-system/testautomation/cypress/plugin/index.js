// eslint-disable-next-line id-length
const registerCypressGrep = require('@bahmutov/cy-grep');

module.exports = async (on, config) => {
  registerCypressGrep(config);

  return config;
};

