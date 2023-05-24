/* eslint-disable no-process-env */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const BASE_URL = `https://${process.env.HOSTNAME}.azurewebsites.net`;

const lastRelease = packageJson.version;
const src = ['.env-example-prod',
  '.env-example',
  '.env'];
// update timestamp for deployment date
const date = new Date();
src.forEach((envFile) => {
  const filePath = path.join(__dirname, '..', envFile);
  if (fs.existsSync(filePath)) {
    const readEnvData = fs.readFileSync(filePath, { encoding: 'utf8',
      flag: 'r' });
    const updatedTimeStamp = `STORYBOOK_DEPLOYMENT_DATE=Last Updated: ${date.getUTCFullYear()}-${
      date.getUTCMonth() + 1
    }-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}, Release Version:${lastRelease}`;
    const updatedEnvFile = readEnvData.replace(/STORYBOOK_DEPLOYMENT_DATE=.*/gm, updatedTimeStamp);
    fs.writeFileSync(filePath, updatedEnvFile);
  }
});

const updateReleasetoFramework = (envfile, row, data) => {
  const filePath = path.join(__dirname, '..', envfile);
  if (fs.existsSync(filePath)) {
    const readEnvData = fs.readFileSync(filePath, {
      encoding: 'utf8',
      flag: 'r'
    });
    const regEx = new RegExp(row, 'gm');
    const updatedEnvFile = readEnvData.replace(regEx, data);
    fs.writeFileSync(filePath, updatedEnvFile);
  }
};
// for angular
updateReleasetoFramework('.env-example-prod', 'STORYBOOK_ANGULAR_URL=.*', `STORYBOOK_ANGULAR_URL=${BASE_URL}/${lastRelease}/angular/`);

// for react
updateReleasetoFramework('.env-example-prod', 'STORYBOOK_REACT_URL=.*', `STORYBOOK_REACT_URL=${BASE_URL}/${lastRelease}/react/`);

// for stencil
updateReleasetoFramework('.env-example-prod', 'STORYBOOK_WC_URL=.*', `STORYBOOK_WC_URL=${BASE_URL}/${lastRelease}/js/`);

// for lib/index.html
updateReleasetoFramework('lib/index.html', 'window.location.replace.*', `window.location.replace('${BASE_URL}/${lastRelease}/js/');`);

// for lib/index.html
updateReleasetoFramework('lib/index.html', '<meta http-equiv="refresh" content=.*', `<meta http-equiv="refresh" content="0;url=${BASE_URL}/${lastRelease}/js/" />`);

// for lib/index.html
updateReleasetoFramework('lib/index.html', '<p>Please follow <a href=.*', `<p>Please follow <a href="${BASE_URL}/${lastRelease}/js/">this link</a>.</p>`);

