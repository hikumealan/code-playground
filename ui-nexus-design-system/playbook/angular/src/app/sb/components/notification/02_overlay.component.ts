import { Component } from '@angular/core';
import { notificationOverlay } from '../../constants';

@Component({
  selector: 'app-notification-overlay',
  templateUrl: './02_overlay.component.html'
})
export default class NotificationOverlayComponent {
  bgColor: string = '';

  bgImage: string = './assets/images/card-header-image.png';

  clickable: boolean = false;

  height: string = '';

  notificationOverlay = notificationOverlay;
}
