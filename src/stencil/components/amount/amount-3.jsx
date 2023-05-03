import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'currency-input',
  shadow: true,
})
export class CurrencyInput {
  @Prop() value: string;
  @Prop() currencySymbol: string;

  constructor() {
    super();
  }

  onInput(event) {
    const value = event.target.value;

    // Only allow numerical input
    if (!/^\d+$/.test(value)) {
      event.preventDefault();
      return;
    }

    // Format the amount
    const formattedValue = value + this.currencySymbol;

    // Set the value of the input element
    event.target.value = formattedValue;
  }

  render() {
    const { value, currencySymbol } = this;

    return (
      <input
        type="text"
        value={value}
        onChange={this.onInput.bind(this)}
      />
    );
  }
}
This component has two properties: value and currencySymbol. The value property is the initial value of the input element, and the currencySymbol property is the currency symbol that should be used to format the amount.

To use this component, you would simply add it to your HTML like this:

<currency-input value="123" currency-symbol="$"></currency-input>
This would render a currency input element with the value "123$".

The component will automatically format the amount as you type, and it will only allow numerical input.
