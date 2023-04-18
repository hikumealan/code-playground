import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'currency-input',
  shadow: true,
})
export class CurrencyInput {
  @Prop() value: string;

  constructor() {
    super();
  }

  onInput(event) {
    const value = event.target.value;

    // Only allow numerical inputs
    if (!/^-?\d+(\.\d+)?$/.test(value)) {
      event.target.value = value.replace(/[^\d\.]/g, '');
    }

    // Format the amount as you type
    event.target.value = value.replace(/(\d)(?=\d{3})/g, '$1,');
  }

  render() {
    const { value } = this;

    return (
      <input
        type="text"
        value={value}
        onChange={this.onInput}
      />
    );
  }
}
This component has one property: value. The value property is the initial value of the input element.

To use this component, you would simply add it to your HTML like this:

<currency-input value="123.45"></currency-input>
This would render a currency input element with the value "123.45".

The component will automatically format the amount as you type, and it will only allow numerical inputs.
