import { Component } from '@angular/core';
import { notificationVariants } from '../../constants';

@Component({
  selector: 'app-notification-variants',
  templateUrl: './03_variants.component.html'
})
export default class NotificationComponent {
  notificationVariants = notificationVariants;
}
