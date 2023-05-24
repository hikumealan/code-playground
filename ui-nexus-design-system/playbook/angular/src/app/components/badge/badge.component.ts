import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent {
  @Input() variant: string = 'default';

  @Input() text: string = '1';

  @Input() overlap: boolean = false;
}
