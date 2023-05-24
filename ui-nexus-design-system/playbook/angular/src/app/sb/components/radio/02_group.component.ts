import { Component, Input } from '@angular/core';
import { radio, group } from '../../constants';

@Component({
  selector: 'app-group',
  templateUrl: './02_group.component.html'
})
export default class GroupComponent {
  @Input() name = radio.name;

  @Input() disabled: boolean = false;

  group = group;
}
