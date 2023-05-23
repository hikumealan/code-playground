// import { namespace } from '../index';
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'xxx-component',
  // tag: `${namespace}-component`,
  styleUrl: 'xxx-component.scss',
  shadow: true,
})
export class XxxComponent {
// export class [`${namespace.charAt(0).toUpperCase() + namespace.slice(1)}Component`] {
  /**
   * HTML types for an input element
   */
  @Prop() type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' = 'text';

  /**
   * HTML attributes to pass to the input element
   */
  @Prop() htmlAttributes?: any;
  /**
   * HTML attributes to pass to the input element
   */
  @Prop() theme: '' | 'ios' | 'material' | 'web' = '';

  render() {
    return (
      <Host>
        <input class={`xxx-input ${this.theme}`} type={`${this.type}`} {...(this.htmlAttributes as any)} />
        <div class={{ 'xxx-slot': true }}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
