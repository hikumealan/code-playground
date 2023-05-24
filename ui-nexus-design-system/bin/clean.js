/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

console.log('Started clean process.');
console.log('---------------------------------');
console.log('Cleaning up node_modules and target file for Nexus Design System');

const cleanupFiles = [
  'target',
  'packages/nexus/coverage',
  'packages/nexus/dist',
  'packages/nexus/loader',
  'packages/nexus-angular/dist',
  'packages/nexus-react/dist',
  'yarn.lock',
  'yalc.lock',
  'node_modules',
  'packages/nexus/node_modules',
  'packages/nexus/package-lock.json',
  'packages/nexus-angular/node_modules',
  'packages/nexus-angular/package-lock.json',
  'packages/nexus-angular/projects/nexus-angular/node_modules',
  'packages/nexus-angular/projects/nexus-angular/package-lock.json',
  'packages/nexus-angular/projects/nexus-angular/yarn.lock',
  'packages/nexus-react/yarn.lock',
  'packages/nexus/yarn.lock',
  'packages/nexus-angular/yarn.lock',
  'packages/nexus-react/node_modules',
  'packages/nexus-react/package-lock.json',
  'playbook/angular/node_modules',
  'playbook/react/node_modules',
  '.playbook'
];

cleanupFiles.forEach((file) => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`Removing path ${filePath}`);
    fs.rmSync(filePath, { recursive: true });
  }
});
