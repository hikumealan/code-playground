import { Component } from '@angular/core';
import { progressBarETA } from '../../constants';

@Component({
  selector: 'app-progress-bar-eta',
  templateUrl: './02_infinite.component.html'
})
export default class ProgressBarETAComponent {
  indeterminate = false;

  message = progressBarETA.checkETA;

  triggerClickHandler() {
    this.indeterminate = !this.indeterminate;
    this.message = this.indeterminate ? progressBarETA.calculatingETA : progressBarETA.checkETA;
  }
}
