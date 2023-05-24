const changeCase = require('change-case');

module.exports = (prefix, name) => `
import React from 'react';

import { ${changeCase.pascalCase(prefix + name)} } from '@nexus/react';

const App = () => <${changeCase.pascalCase(prefix + name)}></${changeCase.pascalCase(prefix + name)}>;

export default App;
  `;
