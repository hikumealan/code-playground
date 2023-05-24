import { Component, Input } from '@angular/core';
import { defaultModal } from '../../constants';

@Component({
  selector: 'app-modal',
  templateUrl: './01_modal.component.html'
})
export default class ModalComponent {
  @Input() show: boolean = false;

  @Input() size: string = 'md';

  @Input() fullscreen: boolean = false;

  defaultModal = defaultModal;

  userName = defaultModal.name;

  email = defaultModal.emailAddress;

  isUserNameValid = true;

  isPasswordValid = true;

  handleCloseEvent = () => {};

  validate(event) {
    return this.isUserNameValid && this.isPasswordValid;
  }

  updateUserName(event) {
    this.userName = event.target.value;
  }

  updateEmailAddress(event) {
    this.email = event.target.value;
  }
}
