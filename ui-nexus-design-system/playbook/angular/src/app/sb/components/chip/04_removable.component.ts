import { Component } from '@angular/core';
import { removable } from '../../constants';

@Component({
  selector: 'app-chip-removable',
  templateUrl: './04_removable.component.html'
})
export default class RemovableChipComponent {
  show = true;

  data = removable;

  triggerRemovableClickCall = (event) => {
    this.show = false;
  };

  triggerCheckBoxSelection = (event) => {
    this.show = event.target.checked;
  };
}
