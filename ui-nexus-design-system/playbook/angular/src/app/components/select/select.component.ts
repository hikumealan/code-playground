import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() disabled = false;

  reactiveValue = new FormControl('', Validators.required);

  options = [
    {
      value: 'option1',
      viewValue: 'Option 1'
    },
    {
      value: 'option2',
      viewValue: 'Option 2'
    },
    {
      value: 'option3',
      viewValue: 'Option 3'
    }
  ];

  handleChange(evnt) {
    this.reactiveValue.setValue(evnt.target.value);
  }
}
