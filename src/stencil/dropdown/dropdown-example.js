import { html, Component, h } from 'stencil';

@Component({
  tag: 'my-dropdown',
  shadow: true,
})
export class MyDropdown {
  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  selectedOption = this.options[0];

  onOptionChange(event) {
    this.selectedOption = event.detail.value;
  }

  render() {
    return (
      <div>
        <button onclick={this.toggle}>
          {this.selectedOption.label}
        </button>
        <ul style="display: none;">
          {this.options.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
    );
  }

  toggle() {
    const dropdown = this.shadowRoot.querySelector('ul');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  }
}

/*
This code will create a dropdown component with three options: Option 1, Option 2, and Option 3. The selected option is initially set to Option 1. When the user clicks on the button, the dropdown will be displayed. The user can then select an option from the dropdown. When the user selects an option, the dropdown will be hidden and the selected option will be updated.

The options property is an array of objects, each of which has a label and value property. The label property is the text that will be displayed for the option, and the value property is the value of the option.

The onOptionChange event handler is a function that is called when the user selects an option from the dropdown. The event object that is passed to the event handler has a detail property, which contains the value of the selected option.

The toggle() method is a function that is called when the user clicks on the button. The method toggles the visibility of the dropdown.
*/
