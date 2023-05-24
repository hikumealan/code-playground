import { Component } from '@angular/core';
import { size } from '../../constants';

@Component({
  selector: 'app-switch-size',
  templateUrl: './05_switchSize.component.html'
})
export default class SwitchSizeComponent {
  size = size;
}
