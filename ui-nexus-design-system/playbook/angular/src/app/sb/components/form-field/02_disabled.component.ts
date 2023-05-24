import { Component } from '@angular/core';
import { disabledFormField } from '../../constants';

@Component({
  selector: 'app-form-field-disabled',
  templateUrl: './02_disabled.component.html'
})
export default class FormFieldDisableComponent {
  disabledField = disabledFormField.text;

  disabledInfo = disabledFormField.disabled;

  title = disabledFormField.title;
}
