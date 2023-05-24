/* eslint-disable no-console */

const fs = require('fs');
const paths = require('./paths');

const stencilTsx = require('../templates/stencil/component.tsx.js');
const stencilTsxE2e = require('../templates/stencil/component.e2e.ts.js');
const stencilSpecTs = require('../templates/stencil/component.spec.ts.js');

module.exports = (name) => {
  fs.mkdirSync(`${paths.stencil}/components/${name}`, { recursive: true });

  fs.writeFileSync(`${paths.stencil}/components/${name}/${name}.tsx`, stencilTsx(name), 'utf8');
  console.log('Created ', `${paths.stencil}/components/${name}/${name}.tsx`);

  fs.writeFileSync(`${paths.stencil}/components/${name}/${name}.scss`, '', 'utf8');
  console.log('Created ', `${paths.stencil}/components/${name}/${name}.scss`);

  fs.writeFileSync(`${paths.stencil}/components/${name}/${name}.e2e.tsx`, stencilTsxE2e(name), 'utf8');
  console.log('Created ', `${paths.stencil}/components/${name}/${name}.e2e.tsx`);

  fs.writeFileSync(`${paths.stencil}/components/${name}/${name}.spec.ts`, stencilSpecTs(name), 'utf8');
  console.log('Created ', `${paths.stencil}/components/${name}/${name}.spec.ts`);
};
