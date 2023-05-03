import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-list',
  shadow: true,
})
export class MyList {
  @Prop() data: any[];

  constructor() {
    super();
  }

  render() {
    const { data } = this;
    const items = data.map((item) => (
      <li key={item.id}>
        {item.content}
        <slot name="custom-content"></slot>
      </li>
    ));

    return (
      <ul>
        {items}
      </ul>
    );
  }
}
This component has one property: data. The data property is an array of objects that represent the items in the list.

To use this component, you would simply add it to your HTML like this:

<my-list data={[
  { id: 1, content: 'This is item 1' },
  { id: 2, content: 'This is item 2' },
  { id: 3, content: 'This is item 3' },
]}></my-list>
This would render a list with three items, with the content "This is item 1", "This is item 2", and "This is item 3". You can use the slot to render custom content for each item.
