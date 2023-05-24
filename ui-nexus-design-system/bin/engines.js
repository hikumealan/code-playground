/* eslint-disable */
String.prototype.replaceAll = function (key, value) {
  return this.split(key).join(value);
};

const child_process = require('child_process');
const package_json = require('../package.json');
const { engines, name, version } = package_json || {};
const { node, npm } = engines || {};
const execSync = (cmd) => child_process.execSync(cmd).toString().replaceAll('\n', '');
const semanticVersion = (v) => {
  const getIncrement = (d) => (d.length === 0 ? '0' : d);
  const ver = typeof v === 'string' ? v.replace(/[^0-9.]+/g, '') : '';
  const sem = ver.length ? ver.split('.') : [];
  let result = '';
  switch (sem.length) {
    case 0:
      result = '0.0.0';
      break;
    case 1:
      result = `${getIncrement(sem[0])}.0.0`;
      break;
    case 2:
      result = `${getIncrement(sem[0])}.${getIncrement(sem[1])}.0`;
      break;
    case 3:
      result = `${getIncrement(sem[0])}.${getIncrement(sem[1])}.${getIncrement(sem[2])}`;
      break;
    default:
      // TODO: Handle more than 3 revision values
      result = `${getIncrement(sem[0])}.${getIncrement(sem[1])}.${getIncrement(sem[2])}`;
      break;
  }

  return result;
};
// console.log('1: "" > ' + semanticVersion(''));
// console.log('2: "." > ' + semanticVersion('.'));
// console.log('3: ".." > ' + semanticVersion('..'));
// console.log('4: "..." > ' + semanticVersion('...'));
// console.log('4: "...." > ' + semanticVersion('....'));
// console.log('5: "v" > ' + semanticVersion('v'));
// console.log('5: "v12" > ' + semanticVersion('v12'));
// console.log('6: "12" > ' + semanticVersion('12'));
// console.log('6: "12." > ' + semanticVersion('12.'));
// console.log('6: "12.." > ' + semanticVersion('12..'));
// console.log('7: ".12" > ' + semanticVersion('.12'));
// console.log('8: ".12." > ' + semanticVersion('.12.'));
// console.log('9: "..12" > ' + semanticVersion('..12'));
// console.log('9: "...12" > ' + semanticVersion('...12'));
// console.log('10: "12.12" > ' + semanticVersion('12.12'));
// console.log('10: "12.12." > ' + semanticVersion('12.12.'));
// console.log('11: "12.12.12" > ' + semanticVersion('12.12.12'));
// console.log('12: "12.12.12.12" > ' + semanticVersion('12.12.12.12'));
const enginesCheck = (required, actual) => {
  const exceptions = [];
  // Engines documentation can be found here https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines
  // "engines": {
  //   "npm": "~1.0.20"
  // }
  // "engines": {
  //   "node": ">=0.10.3 <15"
  // }
  // However Frameworks use more complex set of rules
  // Angular
  // "engines": {
  //   "node": "^14.15.0 || >=16.10.0",
  //     "yarn": ">=1.22.4 <2",
  //     "npm": "Please use yarn instead of NPM to install dependencies"
  // }
  // React
  // "devEngines": {
  //   "node": "^12.17.0 || 13.x || 14.x || 15.x || 16.x"
  // }
  if (typeof actual === 'string' && actual.length) {
    if (required.length) {
      for (let i = 0; i < required.length; i++) {
        // RegEx to select the version
        const vn = semanticVersion(required[i]);
        // RegEx to select the operator
        const op = required[i].replace(/[0-9.]+/g, '');
        let cmd = '';
        // Map the operators to the comparison
        switch (op) {
          case '=':
          case '==':
          case '===':
            cmd = 'equals';
            break;
          case '>':
            cmd = 'greater than';
            break;
          case '>=':
          case '>==':
          case '>===':
            cmd = 'greater than or equals';
            break;
          case '<':
            cmd = 'less than';
            break;
          case '<=':
          case '<==':
          case '<===':
            cmd = 'less than or equals';
            break;
          default:
            // TODO: Ignore ~ * ^
            if (op.length) {
              cmd = 'unknown';
            } else {
              cmd = 'equals';
            }
            break;
        }
        switch (cmd) {
          case 'equals':
            if (actual !== vn) {
              exceptions.push({ type: 'notsup', required: vn, actual });
            }
            break;
          case 'greater than':
            if (actual <= vn) {
              exceptions.push({ type: 'notsup', required: vn, actual });
            }
            break;
          case 'greater than or equals':
            if (actual < vn) {
              exceptions.push({ type: 'notsup', required: vn, actual });
            }
            break;
          case 'less than':
            if (actual >= vn) {
              exceptions.push({ type: 'notsup', required: vn, actual });
            }
            break;
          case 'less than or equals':
            if (actual > vn) {
              exceptions.push({ type: 'notsup', required: vn, actual });
            }
            break;
          case 'unknown':
            // TODO: Handle unknown comparison
            // exceptions.push({type: 'unknown', required: vn, actual});
            break;
          default:
            // TODO: Handle no comparison
            break;
        }
      }
    } else {
      // No comparison needed
    }
  } else {
    // TODO: Handle no comparison
  }

  return exceptions;
};

const versions = {
  env: process.env,
  process: process.versions,
  node: {
    actual: semanticVersion(execSync('node -v')),
    required: typeof node === 'string' ? node.trim().split(' ') : []
  },
  npm: {
    actual: semanticVersion(execSync('npm -v')),
    required: typeof npm === 'string' ? npm.trim().split(' ') : []
  }
};

// Check the node requirements are met
// const nodeErrors = enginesCheck(versions.node.required, versions.node.actual);
// Check the npm requirements are met
// const npmErrors = enginesCheck(versions.npm.required, versions.npm.actual);
const errors = [
  ...enginesCheck(versions.node.required, versions.node.actual),
  ...enginesCheck(versions.npm.required, versions.npm.actual)
];

if (errors.length) {
  // $ npm i
  // npm ERR! code ENOTSUP
  // npm ERR! notsup Unsupported engine for nexus@1.0.0: wanted: {"npm":">=7.0.0","node":">=16.0.0"} (current: {"node":"14.17.0","npm":"6.14.13"})
  // npm ERR! notsup Not compatible with your version of node/npm: nexus@1.0.0
  // npm ERR! notsup Not compatible with your version of node/npm: nexus@1.0.0
  // npm ERR! notsup Required: {"npm":">=7.0.0","node":">=16.0.0"}
  // npm ERR! notsup Actual:   {"npm":"6.14.13","node":"14.17.0"}
  //
  // npm ERR! A complete log of this run can be found in:
  // npm ERR!     /Users/Bryan.A.Olson/.npm/_logs/2022-03-24T12_50_29_903Z-debug.log
  console.error('npm ERR! code ENOTSUP');
  console.error(`npm ERR! notsup Unsupported engine for ${`${name}@${version}`}: wanted: ${''} (current: ${''})`);
  console.error(`npm ERR! notsup Not compatible with your version of node/npm: ${`${name}@${version}`}`);
  console.error(`npm ERR! notsup Required: ${''}`);
  console.error(`npm ERR! notsup Actual:   ${''}`);
  console.error('');
  console.error('npm ERR! A complete log of this run can be found in:');
  console.error(`npm ERR!     ${''}`);
  // process.exitCode = 1;
  process.exit(-1);
} else {
  process.exit(0);
}
