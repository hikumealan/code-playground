import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() text: string;

  @Input() attrId: string = '';

  @Input() checked: boolean = false;

  @Input() disabled: boolean = false;

  @Input() indeterminate: boolean = false;

  @Input() required: boolean = false;
}
