import { Component } from '@angular/core';
import { withMessageFormField } from '../../constants';
@Component({
  selector: 'app-form-field-message',
  templateUrl: './03_withMessage.component.html'
})
export default class FormFieldMessageComponent {
  message = withMessageFormField.messageName;

  customMessage = withMessageFormField.customMessage;
}
