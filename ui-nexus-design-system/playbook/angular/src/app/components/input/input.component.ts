import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
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
}
