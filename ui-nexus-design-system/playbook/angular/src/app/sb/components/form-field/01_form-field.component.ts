import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formField } from '../../constants';
@Component({
  selector: 'app-form-field-primary',
  templateUrl: './01_form-field.component.html'
})
export default class FormFieldComponent {
  @Input() showErrors: boolean;

  @Input() showMessages: boolean;

  reactiveValue = new FormControl('');

  title = formField.title;
}
