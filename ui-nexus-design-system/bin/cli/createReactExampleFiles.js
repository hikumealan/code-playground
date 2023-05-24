/* eslint-disable no-console */

const fs = require('fs');

const paths = require('./paths');
const playbookReactJs = require('../templates/react/component.js');

module.exports = (prefix, componentName, exampleFileName) => {
  fs.mkdirSync(`${paths.playbookReact}/components/${componentName}`, { recursive: true });
  fs.writeFileSync(`${paths.playbookReact}/components/${componentName}/${exampleFileName || componentName}.js`, playbookReactJs(prefix, componentName), 'utf8');
  console.log('Created ', `${paths.playbookReact}/components/${componentName}/${componentName}.js`);
};
