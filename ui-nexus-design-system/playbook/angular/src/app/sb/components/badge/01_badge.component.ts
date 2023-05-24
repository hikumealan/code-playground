import { Component, Input } from '@angular/core';
import { badge } from '../../constants';

@Component({
  selector: 'app-badge',
  templateUrl: './01_badge.component.html'
})
export default class BadgeComponent {
  @Input() variant: string = 'default';

  @Input() label = badge.text;

  @Input() overlap: boolean = false;
}
