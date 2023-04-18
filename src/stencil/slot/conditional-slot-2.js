import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop() content: string;

  constructor() {
    super();
  }

  render() {
    const { content } = this;
    return (
      <div class="my-component">
        {content ? content : 'No content provided'}
      </div>
    );
  }
}
This component has one property: content. The content property is the text or HTML that will be displayed in the component. If no content is provided, the placeholder text "No content provided" will be displayed.

To use this component, you would simply add it to your HTML like this:

<my-component content="This is some content"></my-component>
This would render the text "This is some content" in the component. If you did not provide any content, the placeholder text "No content provided" would be displayed instead.
