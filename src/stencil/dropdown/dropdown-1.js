import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  shadow: true,
})
export class Dropdown {
  @Prop() items: any[];
  @Prop() open: boolean;

  constructor() {
    super();
  }

  render() {
    const { items, open } = this;
    return (
      <div class="dropdown">
        <button class="dropdown-trigger" onmousedown={() => this.open = true}>
          {open ? 'Close' : 'Open'}
        </button>
        <ul class="dropdown-menu" style={open ? '' : 'display: none'}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  onKeyDown() {
    if (this.open) {
      const event = event || window.event;
      const keyCode = event.keyCode || event.which;
      switch (keyCode) {
        case 38: // up arrow
          this.focusPrevious();
          break;
        case 40: // down arrow
          this.focusNext();
          break;
        case 27: // esc
          this.close();
          break;
      }
    }
  }

  focusPrevious() {
    if (this.dropdownMenu.firstChild) {
      const focusedElement = this.dropdownMenu.querySelector('.dropdown-menu-item.active');
      if (focusedElement) {
        const previousElement = focusedElement.previousSibling;
        if (previousElement) {
          previousElement.focus();
        }
      }
    }
  }

  focusNext() {
    if (this.dropdownMenu.firstChild) {
      const focusedElement = this.dropdownMenu.querySelector('.dropdown-menu-item.active');
      if (focusedElement) {
        const nextElement = focusedElement.nextSibling;
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  }

  close() {
    this.open = false;
  }
}
This component has a items property that specifies the items that will be displayed in the dropdown menu. The items can be any type of data, such as strings, objects, or arrays.

The open property is a boolean that specifies whether the dropdown is currently open. When the dropdown is open, the dropdown-menu element will be displayed.

The component also has a few methods that you can use to interact with the dropdown:

focusPrevious(): This method focuses the previous item in the dropdown menu.
focusNext(): This method focuses the next item in the dropdown menu.
close(): This method closes the dropdown.
To use this component, you would simply add it to your HTML like this:

<my-dropdown items={['Option 1', 'Option 2', 'Option 3']} />
This would render a dropdown with three items: "Option 1", "Option 2", and "Option 3".

When the dropdown is open, you can use the keyboard to navigate through the items. The Tab key will move the focus to the next item, and the Shift+Tab key will move the focus to the previous item. You can also use the Enter key to select an item.

To close the dropdown, you can click outside of the dropdown menu, or you can press the Esc key.
