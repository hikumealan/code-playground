/* eslint-disable id-length */
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { stackedBarChartData } from '../../constants';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './01_stacked-bar-chart.component.html'
})
export default class StackedBarChartComponent implements OnInit {
  @Input() axisLabelFontSize: number = 14;

  @Input() axisTickFontFamily: string = 'interstate';

  @Input() axisTickFontSize: number = 10;

  @Input() barStroke: string = 'transparent';

  @Input() barStrokeWidth: number = 1;

  @Input() chartData: any = [];

  @Input() chartId: string = '';

  @Input() colorScheme: string = 'category10';

  @Input() gridlines: boolean = false;

  @Input() hideXAxis: boolean = false;

  @Input() hideXTicks: boolean = false;

  @Input() hideYAxis: boolean = false;

  @Input() hideYTicks: boolean = false;

  @Input() inverse: boolean = false;

  @Input() legend: boolean = false;

  @Input() legendFontSize: number = 12;

  @Input() legendWidth: number = 125;

  @Input() linearDomain: string = 'absolute';

  @Input() linearMetric: string = 'value';

  @Input() linearTickFormat: string = 'raw';

  @Input() maxBarWidth: number = 75;

  @Input() ordinalMetric: string = 'label';

  @Input() orientation: string = 'vertical';

  @Input() responsive: boolean = false;

  @Input() seriesMetric: string = 'category';

  @Input() tooltips: boolean = true;

  @Input() xLabel: string = '';

  @Input() xTickSize: number = 2;

  @Input() yLabel: string = '';

  @Input() yTickSize: number = 2;

  @Input() canvasHeight: number = 300;

  @Input() canvasWidth: number = 500;

  @Input() marginBottom: number = 25;

  @Input() marginLeft: number = 25;

  @Input() marginRight: number = 25;

  @Input() marginTop: number = 25;

  data = stackedBarChartData;

  private htmlElement: HTMLElement;

  constructor(public elRef: ElementRef) {
    this.htmlElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.htmlElement.querySelector('nexus-stacked-bar-chart').chartData = this.data;
  }
}
