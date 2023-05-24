const changeCase = require('change-case');

module.exports = (name, exampleFileName, minHeight) => `
{{#sectionTitle}}${changeCase.capitalCase(exampleFileName || name)}{{/sectionTitle}}

{{component
  src='/react/index.html?component=${name}/${exampleFileName || name}'
  css="min-height: ${minHeight}px;"}}

{{#componentDocumentation}}

  {{code
    src='./playbook/react/src/components/${name}/${exampleFileName || name}.js'
    language='js'}}

{{/componentDocumentation}}

`;
