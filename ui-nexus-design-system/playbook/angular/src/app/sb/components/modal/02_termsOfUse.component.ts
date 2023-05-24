import { Component, Input } from '@angular/core';
import { termsOfUse } from '../../constants';

@Component({
  selector: 'app-modal-tou',
  templateUrl: './02_termsOfUse.component.html'
})
export default class ModalTOUComponent {
  @Input() show: boolean = false;

  @Input() fullscreen: boolean = false;

  termsOfUse = termsOfUse;

  isChecked = false;

  notificationType = 'error';

  notificationMessage = termsOfUse.notificationFailure;

  handleCloseEvent = () => { };

  updateIsChecked(status: boolean) {
    this.isChecked = status;
    this.notificationType = this.isChecked ? 'success' : 'error';
    this.notificationMessage = this.isChecked ? termsOfUse.notificationSuccess : termsOfUse.notificationFailure;
  }
}
