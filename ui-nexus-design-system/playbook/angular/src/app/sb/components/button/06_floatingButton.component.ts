import { Component } from '@angular/core';
import { floatingButton } from '../../constants';

@Component({
  selector: 'app-button-floating-button',
  templateUrl: './06_floatingButton.component.html'
})
export default class FloatingButtonComponent {
  floatingButtons = floatingButton;
}
