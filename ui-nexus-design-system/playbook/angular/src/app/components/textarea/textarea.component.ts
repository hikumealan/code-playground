import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input() attrId: string = '';

  @Input() disabled: boolean = false;

  @Input() maxLength: number;

  @Input() minLength: number;

  @Input() cols: number = 100;

  @Input() rows: number = 3;

  @Input() placeholder: string = '';

  @Input() required: boolean = false;

  @Input() value: string = '';
}
