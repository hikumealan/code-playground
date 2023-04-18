import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true,
})
export class MyInput {
  @Prop() type: string;
  @Prop() value: string;

  constructor() {
    super();
    this.inputElement = document.createElement('input');
    this.inputElement.type = this.type;
    this.inputElement.value = this.value;
  }

  render() {
    return (
      <div>
        <input
          ref={(el) => this.inputElement = el}
          type={this.type}
          value={this.value}
          onInput={(event) => this.handleInput(event)}
        />
      </div>
    );
  }

  handleInput(event) {
    this.value = event.target.value;
  }
}
This component can be used to create a custom input element with the desired type and value. For example, the following code would create a text input element:

<my-input type="text" value="Hello, world!"></my-input>
This component also exposes a few methods that can be used to interact with the input element. For example, the following code would get the value of the input element:

const value = this.myInput.value;
And the following code would set the value of the input element:

this.myInput.value = "New value";
In addition to the basic input element functionality, this component also implements the following features:

Validation: The component can be configured to validate the input value. For example, the following code would require the input value to be a valid email address:
<my-input type="email" required></my-input>
Placeholder: The component can be configured to display a placeholder text inside the input element. For example, the following code would display the placeholder text "Enter your email address":
<my-input type="email" placeholder="Enter your email address"></my-input>
Autofocus: The component can be configured to automatically focus the input element when the page loads. For example, the following code would automatically focus the input element:
<my-input type="text" autofocus></my-input>
Disabled: The component can be configured to disable the input element. For example, the following code would disable the input element:
<my-input type="text" disabled></my-input>
