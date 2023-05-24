import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pin-entry',
  templateUrl: './pin-entry.component.html',
  styleUrls: ['./pin-entry.component.scss']
})
export class PinEntryComponent {
  @Input() length: number = 3;

  @Input() disabled: boolean;

  @Input() type: string;
}
