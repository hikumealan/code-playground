import { Component } from '@angular/core';
import { readOnly } from '../../constants';
@Component({
  selector: 'app-input-examples-read-only',
  templateUrl: './06_readOnly.component.html'
})
export default class InputReadOnlyComponent {
  text = readOnly.text;

  value = readOnly.value;
}
