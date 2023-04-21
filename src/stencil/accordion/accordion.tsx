/*
This Accordion component allows for multiple items to be open at once if the multiple prop is set to true. The component also uses ARIA attributes to improve accessibility.

To use this component, you would create an instance of my-accordion and wrap each item you want to include in the accordion in a my-accordion-item element. The header slot is used for the clickable header that toggles the item open or closed, and the default slot is used for the content that appears when the item is open.

Here's an example usage of the Accordion component:

html
```
<my-accordion multiple>
  <my-accordion-item slot="item-1">
    <div slot="header">Item 1 Header</div>
    <div>Item 1 Content</div>
  </my-accordion-item>
  <my-accordion-item slot="item-2">
    <div slot="header">Item 2 Header</div>
    <div>Item 2 Content</div>
  </my-accordion-item>
</my-accordion>
```

In this example, we've set the multiple prop to true, which allows multiple items to be open at once. We've also given each my-accordion-item a unique slot name, which is used to identify the
*/

import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.scss',
  shadow: true
})
export class MyAccordion {
  @Prop() multiple: boolean = false;

  @State() items: AccordionItem[] = [];

  componentDidLoad() {
    // Find all the accordion items inside the component and store them in the `items` state
    this.items = Array.from(this.el.querySelectorAll('my-accordion-item')).map(item => ({
      item,
      isOpen: false
    }));

    // If the accordion allows multiple items to be open at once, set the initial state of all items to open
    if (this.multiple) {
      this.items.forEach(item => item.isOpen = true);
    }
  }

  handleItemClick(item: AccordionItem) {
    // Toggle the open state of the clicked item
    item.isOpen = !item.isOpen;

    // If the accordion only allows one item to be open at a time, close all other items
    if (!this.multiple) {
      this.items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.isOpen = false;
        }
      });
    }
  }

  render() {
    return (
      <div class="accordion">
        {this.items.map(item => (
          <my-accordion-item isOpen={item.isOpen} onClick={() => this.handleItemClick(item)}>
            <slot name={item.item.getAttribute('slot')} />
          </my-accordion-item>
        ))}
      </div>
    );
  }
}

interface AccordionItem {
  item: HTMLElement;
  isOpen: boolean;
}

@Component({
  tag: 'my-accordion-item',
  styleUrl: 'my-accordion-item.scss',
  shadow: true
})
export class MyAccordionItem {
  @Prop({ reflect: true }) isOpen: boolean = false;

  render() {
    return (
      <div class="accordion-item" aria-expanded={this.isOpen}>
        <div class="accordion-item-header">
          <slot name="header" />
        </div>
        <div class="accordion-item-body" hidden={!this.isOpen}>
          <slot />
        </div>
      </div>
    );
  }
}
