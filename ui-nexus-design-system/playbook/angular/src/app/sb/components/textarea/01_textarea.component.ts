import { Component, Input } from '@angular/core';
import { textarea } from '../../constants';


@Component({
  selector: 'app-textarea',
  templateUrl: './01_textarea.component.html'
})
export default class TextareaComponent {
  @Input() attrId: string = '';

  @Input() disabled: boolean = false;

  @Input() maxLength: number;

  @Input() minLength: number;

  @Input() cols: number = 100;

  @Input() rows: number = 3;

  @Input() placeholder: string = '';

  @Input() required: boolean = false;

  @Input() value: string = '';

  textarea = textarea;
}
