/* eslint-disable no-console */
/* eslint-disable no-sync */

const fs = require('fs');

const styleFolder = './packages/nexus/src/styles/';
const files = fs.readdirSync(styleFolder);
const outPutDir = './tmp/';
const outPutFile = 'scssVariableDocs.json';

let output;
output = [];

files.forEach((file) => {
  if (!file.includes('.scss')) {
    return;
  }

  const fileContents = fs.readFileSync(`${styleFolder}/${file}`);
  const groupRegex = /@group(.|\n)*?@group-end/gm;
  const groups = fileContents.toString().match(groupRegex);

  if (!groups) {
    return;
  }

  output = output.concat(groups.map((group) => {
    const varsRegex = /--[^-/n][^n\n](.)*?\n/gm;
    const vars = group.match(varsRegex);

    return {
      groupName: group.split('@group')[1].split('\n')[0].trim(),
      variables: vars.map((variableString) => ({
        name: variableString.split(':')[0].trim(),
        value: variableString.split(':')[1].split(';')[0].trim(),
        description: variableString.split('//')[1] ? variableString.split('//')[1].trim() : ''
      }))
    };
  }));
});


fs.mkdirSync(outPutDir, { recursive: true });
fs.writeFileSync(outPutDir + outPutFile, JSON.stringify(output, null, 2));
