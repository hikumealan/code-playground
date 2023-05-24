import { Component } from '@angular/core';
import { status } from '../../constants';
@Component({
  selector: 'app-avatar-examples-status',
  templateUrl: './03_status.component.html'
})
export default class StatusComponent {
  name = status.name;

  size = status.size;

  status = status.status;

  avatarNameDisplay = status.avatarNameDisplay;
}
