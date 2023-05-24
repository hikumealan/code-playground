import { Component } from '@angular/core';
import { initialsAndName } from '../../constants';
@Component({
  selector: 'app-avatar-examples-initialandname',
  templateUrl: './06_initialsAndName.component.html'
})
export default class AvatarInitialsAndNameComponent {
  name = initialsAndName.name;

  size = initialsAndName.size;
}
