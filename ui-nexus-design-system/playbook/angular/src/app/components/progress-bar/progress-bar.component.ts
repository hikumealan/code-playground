import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() value: number;

  @Input() indeterminate: boolean = false;

  @Input() error: boolean = false;

  @Input() circle: boolean = false;
}
