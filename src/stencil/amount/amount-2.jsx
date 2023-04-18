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

  render() {
    const { value } = this;

    return (
      <input
        type="text"
        value={value}
        oninput={(e) => {
          const input = e.target;
          const value = input.value;

          // Strip any non-numeric characters from the value
          value = value.replace(/[^0-9.]/g, '');

          // If the value is empty, set it to 0
          if (value === '') {
            value = 0;
          }

          // Format the value as a currency
          value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

          // Set the value of the input element
          input.value = value;
        }}
      />
    );
  }
}
This component has one property: value. The value property is the initial value of the input element.

To use this component, you would simply add it to your HTML like this:

<currency-input value="123.45"></currency-input>
This would render a currency input element with the value "123.45".

The component will automatically format the amount as you type. For example, if you type "12345", the component will format the amount as "12,345".
