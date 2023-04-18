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
    this.enabledDates = [
      new Date(),
      new Date(2023, 3, 8),
      new Date(2023, 3, 15),
    ];
    this.disabledDates = [
      new Date(2023, 3, 7),
      new Date(2023, 3, 14),
    ];
  }

  render() {
    const { value, onChange } = this;
    const { enabledDates, disabledDates } = this;

    const dates = [];
    for (let i = 0; i < 31; i++) {
      const date = new Date();
      date.setDate(i + 1);
      dates.push(date);
    }

    const disabledDatesElements = disabledDates.map((date) => (
      <div key={date} class="disabled-date">
        {date.toLocaleDateString()}
      </div>
    ));

    const enabledDatesElements = enabledDates.map((date) => (
      <div key={date} class="enabled-date">
        {date.toLocaleDateString()}
      </div>
    ));

    return (
      <div>
        <input
          ref={(el) => this.inputElement = el}
          type="date"
          value={value}
          onInput={(event) => this.handleInput(event)}
        />
        <div class="calendar">
          {dates.map((date) => (
            <div key={date} class="date">
              {date.toLocaleDateString()}
              {date.toLocaleDateString() in disabledDates ? (
                <span class="disabled">
                  (disabled)
                </span>
              ) : (
                <span class="enabled">
                  (enabled)
                </span>
              )}
            </div>
          ))}
          {disabledDatesElements}
          {enabledDatesElements}
        </div>
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
