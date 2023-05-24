import { Component } from '@angular/core';
import { chipGroup } from '../../constants';

@Component({
  selector: 'app-chip-group',
  templateUrl: './03_group.component.html'
})
export default class ChipGroupComponent {
  chipGroup = chipGroup;
}
