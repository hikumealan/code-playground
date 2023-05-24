import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() disabled: boolean = false;

  @Input() removable: boolean = false;

  @Input() success: boolean = false;

  @Input() error: boolean = false;

  @Input() text: string = 'Chip Text';
}
