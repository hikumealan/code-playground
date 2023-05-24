import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ion-component',
  styleUrl: 'ion-component.css',
  shadow: true,
})
export class IonComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
