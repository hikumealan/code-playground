import { Component, Input } from '@angular/core';
import { radio, disabledSelected } from '../../constants';

@Component({
  selector: 'app-disabled-selected',
  templateUrl: './06_disabledSelected.component.html'
})
export default class DisabledSelectedComponent {
  @Input() name = radio.name;

  @Input() disabled: boolean = true;

  disabledSelected = disabledSelected;
}
