/* eslint-disable */

var fs = require('fs');
var fs_Extra = require('fs-extra');
var path = require('path');

const packageJson = require('../package.json');
const lastRelease = packageJson.version;

const copyfolderContents = (source, dest) => {
  var sourceDir = path.join(__dirname, source);
  var destinationDir = path.join(__dirname, dest);

  console.log('sourceDir', sourceDir);
  console.log('destinationDir', destinationDir);

  // if folder doesn't exists create dest folder
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }
  // copy folder content
  fs_Extra.copy(sourceDir, destinationDir, function (error) {
    if (error) {
      console.log('error:', error);
    } else {
      console.log('success!');
    }
  });
};
//delete the target folder
const filePath = path.join(__dirname, '..', '.playbook');

if (fs.existsSync(filePath)) {
  console.log(`Removing path ${filePath}`);
  fs.rmSync(filePath, { recursive: true });
}

//for stencil
copyfolderContents('../playbook/stencil/storybook-static', '../.playbook/' + lastRelease + '/js');

//for angular
copyfolderContents('../playbook/angular/storybook-static', '../.playbook/' + lastRelease + '/angular');

//for react
copyfolderContents('../playbook/react/storybook-static', '../.playbook/' + lastRelease + '/react');
copyfolderContents('../target/www/playbook/lcov-report', '../.playbook/' + lastRelease + '/lcov-report');
//copy default landing page
fs_Extra.copyFile(path.join(__dirname, '../lib/index.html'), path.join(__dirname, '../.playbook/index.html'));
