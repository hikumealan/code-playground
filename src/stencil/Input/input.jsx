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
        />
      </div>
    );
  }
}
This component can be used to create a custom input element with the desired type and value. For example, the following code would create a text input element:

<my-input type="text" value="Hello, world!"></my-input>
This component also exposes a few methods that can be used to interact with the input element. For example, the following code would get the value of the input element:

const value = this.myInput.value;
And the following code would set the value of the input element:

this.myInput.value = "New value";
