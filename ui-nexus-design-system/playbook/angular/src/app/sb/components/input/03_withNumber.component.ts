import { Component } from '@angular/core';
import { withNumber } from '../../constants';
@Component({
  selector: 'app-input-examples-number',
  templateUrl: './03_withNumber.component.html'
})
export default class InputNumberComponent {
  text = withNumber.text;

  placeholder = withNumber.placeholder;
}
