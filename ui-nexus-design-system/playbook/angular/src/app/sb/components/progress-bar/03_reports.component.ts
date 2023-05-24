import { Component } from '@angular/core';
import { progressBarReport } from '../../constants';

@Component({
  selector: 'app-progress-bar-reports',
  templateUrl: './03_reports.component.html'
})
export default class ProgressBarPerfReportComponent {
  indeterminate = false;

  progressBarReport = progressBarReport;
}
