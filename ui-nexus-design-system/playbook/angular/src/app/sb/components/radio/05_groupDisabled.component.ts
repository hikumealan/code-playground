import { Component, Input } from '@angular/core';
import { radio, groupDisabled } from '../../constants';

@Component({
  selector: 'app-group-disabled',
  templateUrl: './05_groupDisabled.component.html'
})
export default class GroupDisabledComponent {
  @Input() name = radio.name;

  @Input() disabled: boolean = true;

  groupDisabled = groupDisabled;
}
