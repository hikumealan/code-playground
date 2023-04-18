import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-list',
  shadow: true,
})
export class MyList {
  @Prop() items: any[];
  @Prop() renderItem: (item: any) => JSX.Element;

  constructor() {
    super();
  }

  render() {
    const { items, renderItem } = this;
    const listItems = items.map((item) => (
      renderItem(item)
    ));

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
This component has two properties: items and renderItem. The items property is an array of objects that represent the items in the list, and the renderItem property is a function that is called to render each item in the list.

To use this component, you would simply add it to your HTML like this:

<my-list items={[
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Peter Smith' },
]} renderItem={(item) => (
  <li key={item.id}>{item.name}</li>
)}></my-list>
This would render a list with three items, with the first item being "John Doe", the second item being "Jane Doe", and the third item being "Peter Smith". The items would be rendered using the renderItem function, which in this case simply renders the item's name.
