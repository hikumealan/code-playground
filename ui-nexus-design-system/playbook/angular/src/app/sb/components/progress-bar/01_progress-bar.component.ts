import { Component, Input } from '@angular/core';
import { progressBar } from '../../constants';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './01_progress-bar.component.html'
})
export default class ProgressBarComponent {
  @Input() value: number = progressBar.value;

  @Input() indeterminate: boolean = progressBar.indeterminate;

  @Input() error: boolean = progressBar.error;

  @Input() circle: boolean = progressBar.circle;
}
