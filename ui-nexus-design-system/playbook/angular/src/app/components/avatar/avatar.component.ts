import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent {
  @Input() userName: string = 'No Name';

  @Input() avatarImageSrc: string;

  @Input() avatarClassName: string;

  @Input() avatarSize: string = 'lg';

  @Input() avatarStatus: string;

  @Input() description: string;

  @Input() avatarNotification: string;

  @Input() avatarLogoIcon: string;

  @Input() avatarNameDisplay: boolean;

  @Input() avatarDark: boolean;
}
