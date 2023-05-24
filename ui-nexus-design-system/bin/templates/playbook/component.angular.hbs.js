const changeCase = require('change-case');

module.exports = (componentName, exampleFileName, minHeight) => `
{{#sectionTitle}}${changeCase.capitalCase(exampleFileName || componentName)}{{/sectionTitle}}

{{component
  src='/angular/index.html?${changeCase.camelCase(exampleFileName || componentName)}'
  css="min-height: ${minHeight}px;"}}

{{#componentDocumentation}}

  <p>HTML:</p>
  {{code
    src='./playbook/angular/src/app/components/${exampleFileName || componentName}/${
  exampleFileName || componentName
}.component.html'
    language='html'}}

  <p>TS:</p>

  {{code
    src='./playbook/angular/src/app/components/${exampleFileName || componentName}/${
  exampleFileName || componentName
}.component.ts'
    language='js'}}

{{/componentDocumentation}}

`;
