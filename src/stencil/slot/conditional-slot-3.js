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
      <div class="my-component">
        {this.slot}
        {placeholder && !this.slot ? placeholder : null}
      </div>
    );
  }
}
This component has one property: placeholder. The placeholder property is the text that will be displayed if no markup is provided for the slot.

To use this component, you would simply add it to your HTML like this:

<my-component placeholder="This is the placeholder text"></my-component>
This would render a component with the text "This is the placeholder text". If you provide markup for the slot, the placeholder text will not be displayed.

For example, you could use the following code to render a component with a heading and a paragraph:

<my-component placeholder="This is the placeholder text">
  <h1>This is the heading</h1>
  <p>This is the paragraph</p>
</my-component>
This would render a component with the heading "This is the heading" and the paragraph "This is the paragraph". The placeholder text would not be displayed.
