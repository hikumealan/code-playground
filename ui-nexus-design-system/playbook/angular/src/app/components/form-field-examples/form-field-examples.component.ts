import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-examples',
  templateUrl: './form-field-examples.component.html',
  styleUrls: ['./form-field-examples.component.scss']
})
export class FormFieldExamplesComponent {
  disabledValue = new FormControl({ value: 'Value',
    disabled: true });

  messageValue = new FormControl('');

  errorValue = new FormControl('');
}
