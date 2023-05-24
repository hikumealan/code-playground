import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { nameValidation } from '../../constants';

@Component({
  selector: 'app-error-message-name-validation',
  templateUrl: './03_nameValidation.component.html'
})
export default class NameValidationComponent {
  title = nameValidation.title;

  requiredText = nameValidation.requiredText;

  placeholder = nameValidation.placeholder;

  bioSection = new FormGroup({
    firstName: new FormControl('', [Validators.required])
  });

  get userFirstName(): any {
    return this.bioSection.get('firstName');
  }
}
