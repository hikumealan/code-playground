import { Component } from '@angular/core';
import { appearence } from '../../constants';

@Component({
  selector: 'app-badge-variant',
  templateUrl: './02_appearence.component.html'
})
export default class AppearenceComponent {
  badgeVariant = appearence;
}
