import { Component } from '@angular/core';
import { size } from '../../constants';

@Component({
  selector: 'app-button-size',
  templateUrl: './06_buttonSize.component.html'
})
export default class ButtonSizeComponent {
  size = size;
}
