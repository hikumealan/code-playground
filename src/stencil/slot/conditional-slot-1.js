import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop() placeholder: string;

  constructor() {
    super();
  }

  render() {
    const { placeholder } = this;
    return (
      <div>
        {this.slot('content') || placeholder}
      </div>
    );
  }
}
This component has one property: placeholder. The placeholder property is the text that will be displayed if no markup is provided for the content slot.

To use this component, you would simply add it to your HTML like this:

<my-component placeholder="No content provided"></my-component>
This would render a component with the text "No content provided".

If you provide markup for the content slot, the placeholder text will not be displayed. For example, you could use the following code to provide markup for the content slot:

<my-component placeholder="No content provided">
  <h1>This is the content of the component.</h1>
</my-component>
This would render a component with the heading "This is the content of the component.". The placeholder text would not be displayed.
