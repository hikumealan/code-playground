import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { input } from '../../constants';
@Component({
  selector: 'app-input',
  templateUrl: './01_input.component.html'
})
export default class InputComponent {
  @Input() attrId: string;

  @Input() disabled: boolean;

  @Input() label: string;

  @Input() maxLength: number;

  @Input() minLength: number;

  @Input() placeholder: string;

  @Input() required: boolean;

  @Input() type: string;

  @Input() value: string;

  reactiveValue = new FormControl('');

  title = input.title;
}
