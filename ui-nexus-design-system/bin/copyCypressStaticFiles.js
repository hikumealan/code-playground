const path = require('path');
const fs = require('fs');
const currentWorkingDirectory = process.cwd();
const stylesSourceDirectory = path.join(
  currentWorkingDirectory,
  'target',
  'www',
  'playbook',
  'angular',
  'styles.css'
);

const assetsSourceDirectory = path.join(
  currentWorkingDirectory,
  'target',
  'www',
  'playbook',
  'assets',
  'css',
  'assets'
);

const stylesTargetDirForReactAppTesting = path.join(
  currentWorkingDirectory,
  'playbook',
  'react',
  'src',
  'assets',
  'fonts',
  'styles.css'
);

const stylesTargetDirForAngularAppTesting = path.join(
  currentWorkingDirectory,
  'playbook',
  'angular',
  'src',
  'assets',
  'fonts',
  'styles.css'
);

const assetsTargetDirForAngularAppTesting = path.join(
  currentWorkingDirectory,
  'playbook',
  'angular',
  'src',
  'assets'
);

const assetsTargetDirForReactAppTesting = path.join(
  currentWorkingDirectory,
  'playbook',
  'react',
  'src',
  'assets'
);

const assetsCleanUp = [
  stylesTargetDirForReactAppTesting,
  stylesTargetDirForAngularAppTesting,
  assetsTargetDirForAngularAppTesting,
  assetsTargetDirForReactAppTesting
];

assetsCleanUp.forEach(
  (assetsAndStyles) => {
    if (fs.existsSync(assetsAndStyles)) {
      fs.rmSync(assetsAndStyles, { recursive: true,
        force: true });
    }
  }
);

const stylesData = fs.readFileSync(stylesSourceDirectory, { encoding: 'utf8',
  flag: 'r' });
fs.cpSync(assetsSourceDirectory, assetsTargetDirForAngularAppTesting, { recursive: true });
fs.cpSync(assetsSourceDirectory, assetsTargetDirForReactAppTesting, { recursive: true });
fs.writeFileSync(stylesTargetDirForReactAppTesting, stylesData.replace(/{visibility:hidden}/g, '{visibility: visible}'));
fs.writeFileSync(stylesTargetDirForAngularAppTesting, stylesData.replace(/{visibility:hidden}/g, '{visibility: visible}'));


