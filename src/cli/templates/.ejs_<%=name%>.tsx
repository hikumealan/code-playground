import { Component, Host, h } from '@stencil/core';

@Component({
    tag: '${tagName}',
    styleUrl: '${tagName}.css',
    shadow: true,
})
export class ${toPascalCase(tagName)} {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}