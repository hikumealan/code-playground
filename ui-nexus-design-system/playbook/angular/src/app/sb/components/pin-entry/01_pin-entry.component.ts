import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pin-entry',
  templateUrl: './01_pin-entry.component.html'
})
export default class PinEntryComponent {
  @Input() length: number = 3;

  @Input() disabled: boolean;

  @Input() type: string;
}
