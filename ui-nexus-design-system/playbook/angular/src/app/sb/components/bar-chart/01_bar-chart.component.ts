/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { barChartData } from '../../constants';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './01_bar-chart.component.html'
})
export default class BarChartComponent implements OnInit {
  data = barChartData;

  @Input() axisLabelFontSize: any;

  @Input() axisTickFontFamily: any;

  @Input() axisTickFontSize: any;

  @Input() barStroke: any;

  @Input() barStrokeWidth: any;

  @Input() chartData: any;

  @Input() chartId: any;

  @Input() colorScheme: any;

  @Input() gridlines: any;

  @Input() hideXAxis: any;

  @Input() hideXTicks: any;

  @Input() hideYAxis: any;

  @Input() hideYTicks: any;

  @Input() inverse: any;

  @Input() legend: any;

  @Input() legendFontSize: any;

  @Input() legendMetric: any;

  @Input() legendWidth: any;

  @Input() linearMetric: any;

  @Input() linearTickFormat: any;

  @Input() marginBottom: any;

  @Input() marginLeft: any;

  @Input() marginRight: any;

  @Input() marginTop: any;

  @Input() maxBarWidth: any;

  @Input() orientation: any;

  @Input() responsive: any;

  @Input() tooltips: any;

  @Input() xLabel: any;

  @Input() xTickSize: any;

  @Input() yLabel: any;

  @Input() yTickSize: any;

  @Input() ordinalMetric: any;

  @Input() canvasHeight: any;

  @Input() canvasWidth: any;

  private htmlElement: HTMLElement;

  constructor(public elRef: ElementRef) {
    this.htmlElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.htmlElement.querySelector('nexus-bar-chart').chartData = this.data;
  }
}
