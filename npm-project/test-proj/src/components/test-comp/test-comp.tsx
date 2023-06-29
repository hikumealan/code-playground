import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-comp',
  styleUrl: 'test-comp.css',
  shadow: true,
})
export class TestComp {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
