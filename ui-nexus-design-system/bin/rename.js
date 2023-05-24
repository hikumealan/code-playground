#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * This script does a global find and replace.
 * It is not tested in all scenarios and should be used with caution and tested after.
 */

const { execSync } = require('child_process');

execSync(`yarn add replace`, { stdio: 'inherit' });

const replace = require('replace');

const [
  ,
  ,
  oldName,
  newName,
  oldPrefix,
  newPrefix
] = process.argv;

const oldNameLowerCase = oldName.charAt(0).toLowerCase() + oldName.slice(1);
const oldNameUpperCase = oldName.charAt(0).toUpperCase() + oldName.slice(1);
const newNameLowerCase = newName.charAt(0).toLowerCase() + newName.slice(1);
const newNameUpperCase = newName.charAt(0).toUpperCase() + newName.slice(1);
const oldPrefixNameLowerCase = oldPrefix.charAt(0).toLowerCase() + oldPrefix.slice(1);
const oldPrefixNameUpperCase = oldPrefix.charAt(0).toUpperCase() + oldPrefix.slice(1);
const newPrefixNameLowerCase = newPrefix.charAt(0).toLowerCase() + newPrefix.slice(1);
const newPrefixNameUpperCase = newPrefix.charAt(0).toUpperCase() + newPrefix.slice(1);
const lineDash = '----------------------';
console.log(lineDash);
console.log('Clean...');
console.log(lineDash);

execSync(`yarn clean`, { stdio: 'inherit' });


console.log(lineDash);
console.log('Install required dependencies...');
console.log(lineDash);

execSync(`yarn add renamer replace`, { stdio: 'inherit' });


console.log(lineDash);
console.log('Renaming folders and files...');
console.log(lineDash);

execSync(`yarn renamer --find ${oldName} --replace ${newName} "**"`, { stdio: 'inherit' });

execSync(`yarn renamer --find ${oldPrefix} --replace ${newPrefix} "./${newName}/**"`, { stdio: 'inherit' });

console.log(lineDash);
console.log('Renaming code...');
console.log(lineDash);

const paths = [
  `.`
];

replace({
  regex: oldNameLowerCase,
  replacement: newNameLowerCase,
  paths: paths,
  recursive: true,
  silent: true
});

replace({
  regex: oldNameUpperCase,
  replacement: newNameUpperCase,
  paths: paths,
  recursive: true,
  silent: true
});

replace({
  regex: oldPrefixNameLowerCase,
  replacement: newPrefixNameLowerCase,
  paths: paths,
  recursive: true,
  silent: true
});

replace({
  regex: oldPrefixNameUpperCase,
  replacement: newPrefixNameUpperCase,
  paths: paths,
  recursive: true,
  silent: true
});

console.log(lineDash);
console.log('Resetting up apps...');
console.log(lineDash);

execSync(`yarn setup`, { stdio: 'inherit' });
