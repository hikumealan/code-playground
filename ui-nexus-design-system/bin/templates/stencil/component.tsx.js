const changeCase = require('change-case');

module.exports = (name) => `
import { Component, h } from '@stencil/core';

@Component({
  tag: '${name}',
  shadow: false,
  styleUrl: '${name}.scss'
})
export class ${changeCase.pascalCase(name)} {
  render() {
    return <h1>${name} works!</h1>;
  }
}

`;
