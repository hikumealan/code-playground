import { Component } from '@angular/core';
import { disabledInput } from '../../constants';
@Component({
  selector: 'app-input-examples-disabled',
  templateUrl: './07_disabled.component.html'
})
export default class InputDisabledComponent {
  text = disabledInput.text;

  value = disabledInput.value;
}
