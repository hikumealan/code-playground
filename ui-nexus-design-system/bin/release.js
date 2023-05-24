/* eslint-disable no-console, no-magic-numbers */
const async = require('async');
const replace = require('replace');
const packageJson = require('../package.json');
const moment = require('moment');

// ---------------------------------
// ARGUMENTS -----------------------
// ---------------------------------
const lastRelease = packageJson.version;
const [version] = process.argv.slice(2, 3);
let thisRelease;

// ---------------------------------
// UPDATE PACKAGE VERSION ----------
// ---------------------------------

const updateVersion = (done) => {
  let newNum;


  switch (version) {
  case 'major':
    newNum = parseInt(lastRelease.split('.')[0], 10) + 1;
    thisRelease = `${newNum}.0.0`;
    break;
  case 'minor':
    newNum = parseInt(lastRelease.split('.')[1], 10) + 1;
    thisRelease = `${lastRelease.split('.')[0]}.${newNum}.0`;
    break;
  case 'patch':
    newNum = parseInt(lastRelease.split('.')[2], 10) + 1;
    thisRelease = `${lastRelease.split('.')[0]}.${lastRelease.split('.')[1]}.${newNum}`;
    break;
  default:
    console.log('Invalid release version. Use "major" | "minor" | "patch"');
  }

  if (!thisRelease.length) {
    return;
  }

  console.log(`"version": "${thisRelease}"`);

  replace({
    regex: `"version": "${lastRelease}"`,
    replacement: `"version": "${thisRelease}"`,
    paths: [
      './package.json',
      './packages/nexus/package.json',
      './packages/nexus-react/package.json',
      './packages/nexus-angular/package.json',
      './packages/nexus-angular/projects/nexus-angular/package.json'
    ],
    recursive: false,
    silent: false
  });

  replace({
    regex: `"@nexus/core": "${lastRelease}"`,
    replacement: `"@nexus/core": "${thisRelease}"`,
    paths: [
      `./packages/nexus-angular/package.json`,
      `./packages/nexus-react/package.json`,
      `./playbook/angular/package.json`,
      `./playbook/react/package.json`
    ],
    recursive: false,
    silent: false
  });

  replace({
    regex: `"@nexus/react": "${lastRelease}"`,
    replacement: `"@nexus/react": "${thisRelease}"`,
    paths: [
      `./playbook/react/package.json`
    ],
    recursive: false,
    silent: false
  });

  replace({
    regex: `"@nexus/angular": "${lastRelease}"`,
    replacement: `"@nexus/angular": "${thisRelease}"`,
    paths: [
      `./playbook/angular/package.json`
    ],
    recursive: false,
    silent: false
  });

  console.log('Updated Package Version');

  done();
};

// ---------------------------------
// UPDATE CHANGELOG ----------------
// ---------------------------------

const changelog = (done) => {
  // Replace the Unreleased header with the release version
  replace({
    regex: '## Unreleased',
    replacement: `## Unreleased

### Features

### Bug Fixes

### DEPRECATIONS

### BREAKING CHANGES


--------------------------------

## Release ${thisRelease} (${moment().format('YYYY-MM-DD')})`,
    paths: ['./CHANGELOG.md'],
    recursive: false,
    silent: true
  });

  console.log('Updated Changelog Header');

  done();
};

// ---------------------------------
// RUN TASKS -----------------------
// ---------------------------------

async.series([
  updateVersion,
  changelog
]);
