import { Component } from '@angular/core';
import { sizeAvatar } from '../../constants';
@Component({
  selector: 'app-avatar-examples-size',
  templateUrl: './02_size.component.html'
})
export default class AvatarSizeComponent {
  sizeXS = sizeAvatar.sizeXS;

  sizeSM = sizeAvatar.sizeSM;

  sizeMD = sizeAvatar.sizeMD;

  sizeLG = sizeAvatar.sizeLG;

  sizeXL = sizeAvatar.sizeXL;

  logoIcon = sizeAvatar.logoIcon;

  name = sizeAvatar.name;

  avatarNameDisplay = sizeAvatar.avatarNameDisplay;
}
