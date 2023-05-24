import { Component, Input } from '@angular/core';
import { notification } from '../../constants';

@Component({
  selector: 'app-notification',
  templateUrl: './01_notification.component.html'
})
export default class NotificationComponent {
  @Input() variant: string = notification.variant;

  message: string = notification.text;
}
