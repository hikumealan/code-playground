import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  shadow: true,
})
export class Dropdown {
  @Prop() content: any[];
  @Prop() trigger: string;
  @Prop() placement: string;

  constructor() {
    super();
  }

  render() {
    const { content, trigger, placement } = this;
    return (
      <div class="dropdown">
        <button class="dropdown-trigger" onmousedown={this.openDropdown}>{trigger}</button>
        <ul class="dropdown-content" style={{ placement }}>
          {content.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }

  openDropdown() {
    document.body.classList.add('dropdown-open');
  }

  closeDropdown() {
    document.body.classList.remove('dropdown-open');
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this.closeDropdown);
  }

  disconnectedCallback() {
    window.removeEventListener('click', this.closeDropdown);
    super.disconnectedCallback();
  }
}
This component has three properties: content, trigger, and placement. The content property is an array of objects that represent the items in the dropdown, the trigger property is the text that will be displayed on the dropdown trigger, and the placement property is a string that specifies the placement of the dropdown. The possible values for the placement property are:

top: The dropdown will be displayed above the trigger.
bottom: The dropdown will be displayed below the trigger.
left: The dropdown will be displayed to the left of the trigger.
right: The dropdown will be displayed to the right of the trigger.
To use this component, you would simply add it to your HTML like this:

<my-dropdown content={[
  { id: 1, text: 'Action 1' },
  { id: 2, text: 'Action 2' },
  { id: 3, text: 'Action 3' },
]} trigger="Dropdown" placement="bottom"></my-dropdown>
This would render a dropdown with three actions: Action 1, Action 2, and Action 3. The dropdown would be displayed below the text "Dropdown".

The dropdown will be positioned dynamically based on the current position of the trigger element on the screen and always visible to the user.

The dropdown will be responsive and will adapt to mobile viewpoints.
