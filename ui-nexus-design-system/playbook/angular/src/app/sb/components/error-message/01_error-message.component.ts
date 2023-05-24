import { Component, Input } from '@angular/core';
import { errorMessage } from '../../constants';
@Component({
  selector: 'app-error-message',
  templateUrl: './01_error-message.component.html'
})
export default class SBErrorMessageComponent {
  @Input() message = errorMessage.title;

  @Input() text = errorMessage.text;

  dataTestIdLabel = errorMessage.dataTestIdLabel;

  dataTestIdInput = errorMessage.dataTestIdInput;

  dataTestIdErrorMessage = errorMessage.dataTestIdErrorMessage;
}
