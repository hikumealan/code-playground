const fs = require('fs');
const changeCase = require('change-case');
const paths = require('./paths');

module.exports = (name) => {
  const angularModule = fs.readFileSync(`${paths.stencilAngular}/lib/nexus-angular.module.ts`).toString();
  const importSep = `} from './directives/proxies';`;
  const declarationSep = `];`;
  const newAngularModule = angularModule
    .split(importSep)[0]
    .trim()
    .concat(`,\n  ${changeCase.pascalCase(name)}\n`)
    .concat(importSep)
    .concat(angularModule.split(importSep)[1])
    .split(declarationSep)[0]
    .trim()
    .concat(`,\n  ${changeCase.pascalCase(name)}\n`)
    .concat(declarationSep)
    .concat(angularModule.split(declarationSep)[1]);

  fs.writeFileSync(`${paths.stencilAngular}/lib/nexus-angular.module.ts`, newAngularModule, 'utf8');
};
