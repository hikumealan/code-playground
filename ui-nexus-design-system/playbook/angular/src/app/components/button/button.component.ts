import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() classNames: string = 'nexus-btn';

  @Input() children: string = 'Click Me!';

  @Input() disabled: boolean = false;
}
