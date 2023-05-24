const changeCase = require('change-case');

module.exports = (name, exampleFileName, minHeight = '200') => `
{{#sectionTitle}}${changeCase.capitalCase(exampleFileName || name)}{{/sectionTitle}}

{{component
  src='/stencil/temp/${exampleFileName || name}.html'
  css="min-height: ${minHeight}px;"}}

{{#componentDocumentation}}

  <p>HTML:</p>

  {{code
    src='./playbook/stencil/examples/${name}/${exampleFileName || name}.html'
    language='html'}}

  <p>JS:</p>

  {{code
    src='./playbook/stencil/examples/${name}/${exampleFileName || name}.js'
    language='js'}}

{{/componentDocumentation}}

`;
