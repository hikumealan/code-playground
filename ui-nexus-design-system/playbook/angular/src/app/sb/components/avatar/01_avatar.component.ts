import { Component, Input } from '@angular/core';
import { avatar } from '../../constants';

@Component({
  selector: 'app-avatar',
  templateUrl: './01_avatar.component.html'
})
export default class AvatarComponent {
  @Input() userName: string;

  @Input() avatarImageSrc: string = avatar.image;

  @Input() avatarClassName: string = avatar.class;

  @Input() avatarSize: string = avatar.size;

  @Input() avatarStatus: string = avatar.status;

  @Input() description: string = avatar.descript;

  @Input() avatarNotification: string = avatar.notification;

  @Input() avatarLogoIcon: string = avatar.logoIcon;

  @Input() avatarNameDisplay: boolean = avatar.nameDisplay;

  @Input() avatarDark: boolean = avatar.dark;
}
