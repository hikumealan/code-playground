import { Component, Input } from '@angular/core';
import { DefaultStepper } from '../../constants';

@Component({
  selector: 'app-stepper',
  templateUrl: './01_stepper.component.html'
})
export default class StepperComponent {
  @Input() steppertype: string;

  DefaultStepper = DefaultStepper;
}
