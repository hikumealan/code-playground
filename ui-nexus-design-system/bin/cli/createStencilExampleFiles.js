/* eslint-disable no-console */

const fs = require('fs');

const paths = require('./paths');
const playbookStencilHtml = require('../templates/stencil/component.html.js');

module.exports = (prefix, componentName, exampleFileName) => {
  fs.mkdirSync(`${paths.playbookStencil}/${componentName}`, { recursive: true });

  fs.writeFileSync(`${paths.playbookStencil}/${componentName}/${exampleFileName || componentName}.html`, playbookStencilHtml(prefix, componentName), 'utf8');
  console.log('Created ', `${paths.playbookStencil}/${componentName}/${exampleFileName || componentName}.html`);

  fs.writeFileSync(`${paths.playbookStencil}/${componentName}/${exampleFileName || componentName}.js`, '', 'utf8');
  console.log('Created ', `${paths.playbookStencil}/${componentName}/${exampleFileName || componentName}.js`);
};
