import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'input-toggle',
  styleUrl: 'input-toggle.scss',
  shadow: true,
})
export class InputToggle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
