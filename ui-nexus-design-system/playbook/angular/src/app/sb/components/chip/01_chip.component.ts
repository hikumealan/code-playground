import { Component, Input } from '@angular/core';
import { chip as defaultChip } from '../../constants';

@Component({
  selector: 'app-chip',
  templateUrl: './01_chip.component.html'
})
export default class ChipComponent {
  @Input() disabled: boolean = false;

  @Input() removable: boolean = false;

  @Input() success: boolean = false;

  @Input() error: boolean = false;

  @Input() text: string = defaultChip.text;
}
