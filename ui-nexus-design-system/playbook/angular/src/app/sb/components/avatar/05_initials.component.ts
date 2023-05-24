import { Component } from '@angular/core';
import { initials } from '../../constants';

@Component({
  selector: 'app-avatar-examples-initials',
  templateUrl: './05_initials.component.html'
})
export default class AvatarInitialsComponent {
  name = initials.name;

  size = initials.size;

  avatarNameDisplay = initials.avatarNameDisplay;
}
