import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './01_toggle.component.html'

})
export default class ToggleComponent {
  @Input() size: string = 'md';

  @Input() disabled: boolean = false;

  @Input() labelActive: string = '';

  @Input() labelInactive: string = '';

  @Input() toggled: boolean = false;

  @Input() required: boolean = false;

  @Input() type: string = 'switch';
}
