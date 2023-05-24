import { Component } from '@angular/core';
import { withPassword } from '../../constants';
@Component({
  selector: 'app-input-examples-password',
  templateUrl: './04_withPassword.component.html'
})
export default class InputPasswordComponent {
  text = withPassword.text;

  placeholder = withPassword.placeholder;
}
