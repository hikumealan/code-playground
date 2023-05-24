/* eslint-disable no-console */

const fs = require('fs');

const paths = require('./paths');
const playbookAngularPage = require('../templates/playbook/component.angular.hbs.js');

const playbookIndexPage = require('../templates/playbook/index.hbs.js');
const playbookReactPage = require('../templates/playbook/component.react.hbs.js');
const playbookStencilPage = require('../templates/playbook/component.stencil.hbs.js');

// eslint-disable-next-line complexity
module.exports = (prefix, componentName, exampleFileName, playbookDir) => {
  const minHeight = exampleFileName && exampleFileName.indexOf('examples') > -1 ? '400' : '200';
  fs.mkdirSync(`${paths.playbookPages}/${playbookDir}/${componentName}`, { recursive: true });

  if (!fs.existsSync(`${paths.playbookPages}/${playbookDir}/${componentName}/index.hbs`)) {
    fs.writeFileSync(`${paths.playbookPages}/${playbookDir}/${componentName}/index.hbs`, playbookIndexPage(prefix, componentName, playbookDir), 'utf8');
    console.log('Created ', `${paths.playbookPages}/${playbookDir}/${componentName}/index.hbs`);
  }
  const filePathToAngular = `${paths.playbookPages}/${playbookDir}/${componentName}/${exampleFileName || componentName}.angular.hbs`;
  const filePathToReact = `${paths.playbookPages}/${playbookDir}/${componentName}/${exampleFileName || componentName}.react.hbs`;
  const filePathToStencil = `${paths.playbookPages}/${playbookDir}/${componentName}/${exampleFileName || componentName}.stencil.hbs`;
  fs.writeFileSync(filePathToAngular, playbookAngularPage(componentName, exampleFileName, minHeight), 'utf8');
  console.log('Created ', `${paths.playbookPages}/${playbookDir}/${componentName}/${exampleFileName || componentName}.angular.hbs`);

  fs.writeFileSync(filePathToReact, playbookReactPage(componentName, exampleFileName, minHeight), 'utf8');
  console.log('Created ', `${paths.playbookPages}/${playbookDir}/${componentName}/${exampleFileName || componentName}.react.hbs`);

  fs.writeFileSync(filePathToStencil, playbookStencilPage(componentName, exampleFileName, minHeight), 'utf8');
  console.log('Created ', `${paths.playbookPages}/${playbookDir}/${componentName}/${exampleFileName || componentName}.stencil.hbs`);
};
