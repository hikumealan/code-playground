import { Component } from '@angular/core';
import { buttonSizeVariant } from '../../constants';

@Component({
  selector: 'app-button-size-variants',
  templateUrl: './02_size.component.html'
})
export default class SizeComponent {
  buttonSizeVariant = buttonSizeVariant;
}
