import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidation } from '../../constants';

@Component({
  selector: 'app-error-message-email-validation',
  templateUrl: './02_emailValidation.component.html'
})
export default class EmailValidationComponent {
  title = emailValidation.title;

  requiredText = emailValidation.requiredText;

  validText = emailValidation.validText;

  successText = emailValidation.successText;

  placeholder = emailValidation.placeholder;

  userData = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ])
  });

  get primEmail() {
    return this.userData.get('primaryEmail');
  }
}
