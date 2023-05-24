import { Component, Input } from '@angular/core';
import { StepperStatus } from '../../constants';

@Component({
  selector: 'app-stepper-status',
  templateUrl: './02_status.component.html'
})
export default class StepperStatusComponent {
  StepperStatus = StepperStatus;
}
