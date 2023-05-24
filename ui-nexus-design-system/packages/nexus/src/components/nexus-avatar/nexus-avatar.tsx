import { Component, h, Host, Prop, State } from '@stencil/core';
@Component({
  tag: 'nexus-avatar',
  shadow: false,
  styleUrl: 'nexus-avatar.scss'
})
export class NexusAvatar {
  @State() initials;

  /**
   * Will be used as a description and formated as initials if no src is provided.
   */
  @Prop() userName: string = 'Name';

  /**
   * Specifies the path to the image.
   */
  @Prop() avatarImageSrc: string = '';

  /**
   * Specify a custom class to override styles of the Avatar component.
   */
  @Prop() avatarClassName: string = '';

  /**
   * Avatar Size.
   */
  @Prop() avatarSize: string = 'lg';

  /**
   * Avatar connection status.
   */
  @Prop() avatarStatus: string = '';

  /**
   * Specifies an alternate text for an image.
   */
  @Prop() description: string = '';

  /**
   * Avatar notification icon.
   */
  @Prop() avatarNotification: string = '';

  /**
   * Avatar logo icon.
   */
  @Prop() avatarLogoIcon: string = '';

  /**
   * Avatar name display.
   */
  @Prop() avatarNameDisplay: boolean = true;

  /**
   * Avatar dark mode.
   */
  @Prop() avatarDark: boolean = false;

  componentWillLoad() {
    this.initials = this.userName
      .split(' ')
      .map((name) => name[0])
      .join('');
  }

  darkModeHandler() {
    if (this.avatarDark === true) {
      return 'dark-mode';
    }

    return 'light-mode';
  }

  render() {
    return (
      <Host>
        <div
          class={
            this.avatarClassName ? `nexus-avatar avatar-size-${this.avatarSize}${this.avatarClassName}` : `nexus-avatar avatar${this.darkModeHandler()}
              avatar-size-${this.avatarSize}`
          }
        >
          {this.avatarImageSrc ? <img src={this.avatarImageSrc} class="avatar-image" alt={this.description} /> : ''}
          {this.avatarLogoIcon ? <nexus-icon
            src={this.avatarLogoIcon}
            class={`avatar-logo-${this.avatarSize} avatar-logo ${this.darkModeHandler()}`}
            alt="avatar logo"
          ></nexus-icon> : <span class={`initials ${this.darkModeHandler()}`}>{this.initials}</span>
          }
          {this.avatarStatus ? <div class={`avatar-status-${this.avatarSize} avatar-status avatar-status-${this.avatarStatus}`}></div> : ''
          }
          {this.avatarNotification ? <div class={`avatar-notification-${this.avatarSize} avatar-notification`}>
            <span class="notification-text">{this.avatarNotification}</span>
          </div> : ''
          }
        </div>
        {this.avatarNameDisplay ? <span class={`user-name user-name-${this.avatarSize}`}>{this.userName}</span> : ''}
      </Host>
    );
  }
}
