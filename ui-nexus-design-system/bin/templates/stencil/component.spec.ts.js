const changeCase = require('change-case');

module.exports = (name) => `import { ${changeCase.pascalCase(name)} } from './${name}';
import { newSpecPage } from '@stencil/core/testing';

describe('${name}', () => {
  it('builds', async () => {
    const page = await newSpecPage({
      components: [${changeCase.pascalCase(name)}],
      html: '<${name}></${name}>'
    });

    expect(new ${changeCase.pascalCase(name)}()).toBeTruthy();
    expect(page.root).toEqualHtml('<${name}><h1>${name} works!</h1></${name}>');
  });
});
`;
