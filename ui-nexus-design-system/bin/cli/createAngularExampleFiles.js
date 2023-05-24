const { execSync } = require('child_process');
const replace = require('replace');
const changeCase = require('change-case');

const paths = require('./paths');

module.exports = (prefix, componentName, exampleFileName) => {
  const fileName = exampleFileName || componentName;

  execSync(`yarn --cwd playbook/angular ng g component components/${fileName}`, { stdio: 'inherit' });

  replace({
    regex: `// New Import Here`,
    replacement: `import { ${changeCase.pascalCase(
      fileName
    )}Component } from './components/${fileName}/${fileName}.component';
// New Import Here`,
    paths: [`${paths.playbookAngular}/app.component.ts`],
    recursive: false,
    silent: false
  });

  replace({
    regex: `// New Map Here`,
    replacement: `${changeCase.camelCase(fileName)} = ${changeCase.pascalCase(fileName)}Component;
  // New Map Here`,
    paths: [`${paths.playbookAngular}/app.component.ts`],
    recursive: false,
    silent: false
  });

  replace({
    regex: `<p>${componentName} works!</p>`,
    replacement: `<${prefix}${componentName}></${prefix}${componentName}>`,
    paths: [`${paths.playbookAngular}/components/${fileName}/${fileName}.component.html`],
    recursive: false,
    silent: false
  });
};
