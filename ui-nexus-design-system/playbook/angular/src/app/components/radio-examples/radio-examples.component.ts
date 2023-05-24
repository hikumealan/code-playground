import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-examples',
  templateUrl: './radio-examples.component.html',
  styleUrls: ['./radio-examples.component.scss']
})
export class RadioExamplesComponent {
  radioGroup1 = [
    {
      name: 'Option 1',
      value: 'option1'
    },
    {
      name: 'Option 2',
      value: 'option2'
    },
    {
      name: 'Option 3',
      value: 'option3'
    }
  ];

  radioValue1 = new FormControl({ value: '',
    disabled: true });

  radioGroup2 = [
    {
      name: 'Option 1',
      value: 'option1'
    },
    {
      name: 'Option 2',
      value: 'option2'
    },
    {
      name: 'Option 3',
      value: 'option3'
    }
  ];

  radioValue2 = new FormControl({ value: 'option1',
    disabled: true });
}
