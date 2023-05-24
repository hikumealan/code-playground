import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() size: string = 'md';

  @Input() disabled: boolean = false;

  @Input() labelActive: string = '';

  @Input() labelInactive: string = '';

  @Input() toggled: boolean = false;

  @Input() required: boolean = false;
}
