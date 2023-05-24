import { Component } from '@angular/core';
import { buttonState } from '../../constants';

@Component({
  selector: 'app-button-states',
  templateUrl: './03_state.component.html'
})
export default class StateComponent {
  buttonState = buttonState;
}
