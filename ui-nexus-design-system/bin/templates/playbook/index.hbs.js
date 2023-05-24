const changeCase = require('change-case');

module.exports = (prefix, name, playbookDir) => `
{{#template 'component'}}

  {{#pageTitle}}${changeCase.capitalCase(name)}{{/pageTitle}}

  <div class="playbook-component-tabs-container">
    <input id="tab-1" type="radio" name="tabs" checked="checked"/>
    <input id="tab-2" type="radio" name="tabs"/>
    <input id="tab-3" type="radio" name="tabs"/>
    <div class="tabs">
      <label for="tab-1">HTML</label>
      <label for="tab-2">Angular</label>
      <label for="tab-3">React</label>
    </div>
    <div class="content">
      <div class="tab">
        {{ section 'components/${playbookDir}/${name}/${name}.stencil.hbs' }}
      </div>
      <div class="tab">
        {{ section 'components/${playbookDir}/${name}/${name}.angular.hbs' }}
      </div>
      <div class="tab">
        {{ section 'components/${playbookDir}/${name}/${name}.react.hbs' }}
      </div>
    </div>
  </div>

  <h2>Properties</h2>

  <section class="playbook-component-properties">
    {{{ md 'packages/nexus/src/components/${prefix}${name}/readme.md'}}}
  </section>

{{/template}}

`;
