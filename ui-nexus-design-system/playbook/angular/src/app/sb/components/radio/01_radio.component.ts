import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './01_radio.component.html'
})
export default class RadioComponent {
  @Input() attrId: string;

  @Input() checked: boolean = true;

  @Input() disabled: boolean = true;

  @Input() nameOption: string = 'Simple Radio Example';

  @Input() required: boolean;

  @Input() value: string;
}
