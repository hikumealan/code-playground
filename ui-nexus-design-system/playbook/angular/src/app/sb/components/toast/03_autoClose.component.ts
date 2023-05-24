import { Component } from '@angular/core';
// eslint-disable-next-line no-restricted-imports
import { startWith, Subject, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-toast-auto-close',
  templateUrl: './03_autoClose.component.html'
})
export default class ToastAutoCloseComponent {
  timeLeft: number = 20;

  interval;

  constructor() {
    this.startTimer();
  }

  restartTimer(event) {
    this.timeLeft = 20;
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1;
      }
    }, 1000);
  }
}
