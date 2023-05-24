import { Component, Input } from '@angular/core';
import { button } from '../../constants';

@Component({
  selector: 'app-button',
  templateUrl: './01_button.component.html'
})
export default class ButtonComponent {
  @Input() classNames: string = 'nexus-btn';

  @Input() children = button.text;

  @Input() disabled: boolean = false;
}
