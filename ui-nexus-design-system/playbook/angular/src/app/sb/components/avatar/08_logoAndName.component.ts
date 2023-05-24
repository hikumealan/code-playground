import { Component } from '@angular/core';
import { logoAndName } from '../../constants';
@Component({
  selector: 'app-avatar-examples-logo-name',
  templateUrl: './08_logoAndName.component.html'
})
export default class LogoAndNameComponent {
  name = logoAndName.name;

  size = logoAndName.size;

  logoIcon = logoAndName.logoIcon;
}
