#!/usr/bin/env node
/* eslint-disable prefer-destructuring */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */

const { execSync } = require('child_process');
const argv = require('yargs').argv;

const cmd = argv.cmd;
const type = argv.type;
const componentName = argv.name;
const exampleFileName = argv.exampleName;
const playbookDir = argv.playbookDir;
const updateAngularModule = require('./cli/updateAngularModule');
const createStencilFiles = require('./cli/createStencilFiles');
const updateIndexPages = require('./cli/updateIndexPages');
const createStencilExampleFiles = require('./cli/createStencilExampleFiles');
const createAngularExampleFiles = require('./cli/createAngularExampleFiles');
const createReactExampleFiles = require('./cli/createReactExampleFiles');
const createPlaybookFiles = require('./cli/createPlaybookFiles');

const PREFIX = `nexus-`;

if (cmd === 'g' || cmd === 'generate') {
  if (type === 'component') {
    createStencilFiles(`${PREFIX}${componentName}`);
    updateAngularModule(`${PREFIX}${componentName}`);
  }

  if (type === 'example') {
    updateIndexPages(componentName, exampleFileName);
    createStencilExampleFiles(PREFIX, componentName, exampleFileName);
    createAngularExampleFiles(PREFIX, componentName, exampleFileName);
    createReactExampleFiles(PREFIX, componentName, exampleFileName);
    createPlaybookFiles(PREFIX, componentName, exampleFileName, playbookDir);
  }
}
else if (cmd === 'version') {
  execSync(`node bin/release.js ${type}`, { stdio: 'inherit' });
}
else {
  console.error('Please enter a valid command.');
}
