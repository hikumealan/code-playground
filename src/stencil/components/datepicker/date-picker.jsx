import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-datepicker',
  shadow: true,
})
export class MyDatePicker {
  @Prop() value: Date;
  @Prop() onChange: (date: Date) => void;

  constructor() {
    super();
    this.currentDate = new Date();
  }

  render() {
    return (
      <div>
        <input
          ref={(el) => this.inputElement = el}
          type="date"
          value={this.currentDate}
          onInput={(event) => this.handleInput(event)}
        />
      </div>
    );
  }

  handleInput(event) {
    this.currentDate = new Date(event.target.value);
    if (this.onChange) {
      this.onChange(this.currentDate);
    }
  }
}
This component can be used to create a custom date picker with the desired value. For example, the following code would create a date picker with the current date as the initial value:

<my-datepicker value={new Date()} onChange={(date) => console.log(date)}></my-datepicker>
This component also exposes a few methods that can be used to interact with the date picker. For example, the following code would get the current value of the date picker:

const value = this.myDatePicker.value;
And the following code would set the value of the date picker:

this.myDatePicker.value = new Date();
