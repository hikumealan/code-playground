import { notification } from '../../../../../../stories/data/notification/notification';
import { Component } from '@angular/core';
import { initialsNameAndNotification } from '../../constants';
@Component({
  selector: 'app-avatar-examples-initial-name-notification',
  templateUrl: './07_initialsNameAndNotification.component.html'
})
export default class InitialsNameAndNotificationComponent {
  name = initialsNameAndNotification.name;

  size = initialsNameAndNotification.size;

  notification = initialsNameAndNotification.notification;
}
