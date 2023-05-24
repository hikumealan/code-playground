import { Component, Input } from '@angular/core';
import { validation } from '../../constants';


@Component({
  selector: 'app-validation',
  templateUrl: './03_validation.component.html'
})
export default class ValidationComponent {
  @Input() disabled: boolean = false;

  values = validation.values;

  text = validation.text;

  variable = validation.variable;

  onKey(event: any) {
    this.values = event.target.value;
    if (this.values >= 7) {
      this.variable = 'master';
    } else if (this.values >= 4) {
      this.variable = 'medium advanced';
    } else {
      this.variable = 'novice';
    }
  }
}
