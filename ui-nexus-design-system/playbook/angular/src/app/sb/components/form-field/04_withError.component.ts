import { Component } from '@angular/core';
import { withErrorFormField } from '../../constants';
@Component({
  selector: 'app-form-field-error',
  templateUrl: './04_withError.component.html'
})
export default class FormFieldWithErrorComponent {
  text = withErrorFormField.text;

  name = withErrorFormField.name;

  message = withErrorFormField.message;
}
