import { Component } from '@angular/core';
import { disabled } from '../../constants';

@Component({
  selector: 'app-button-disabled',
  templateUrl: './05_disabled.component.html'
})
export default class DisabledComponent {
  disabled = disabled;
}
