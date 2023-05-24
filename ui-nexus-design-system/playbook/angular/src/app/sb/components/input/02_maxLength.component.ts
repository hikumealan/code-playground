import { Component, OnInit } from '@angular/core';
import { maxLength } from '../../constants';

@Component({
  selector: 'app-input-examples-max-length',
  templateUrl: './02_maxLength.component.html'
})
export default class InputMaxLengthComponent implements OnInit {
  maxLength = maxLength.maxLength;

  maxLengthText = maxLength.text;

  maxLengthPlaceholder = maxLength.placeholder;

  maxLengthWarning = maxLength.warning;

  showErrorMessage = false;

  constructor() {}

  ngOnInit() {}

  onInput(value: string) {
    if (value.length >= this.maxLength) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }
  }
}
