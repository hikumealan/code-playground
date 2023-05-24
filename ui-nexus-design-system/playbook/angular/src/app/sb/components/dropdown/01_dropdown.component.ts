import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './01_dropdown.component.html'
})
export default class DropdownComponent {
  @Input() show: boolean;

  @Input() placement: string;

  @Input() dropdownType: string;

  @Input() height: number;

  @Input() width: number;
}
