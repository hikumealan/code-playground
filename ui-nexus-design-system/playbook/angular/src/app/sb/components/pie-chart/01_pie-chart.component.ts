/* eslint-disable id-length */
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { pieChartData } from '../../constants';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './01_pie-chart.component.html'
})
export default class PieChartComponent implements OnInit {
  @Input() chartData: any = [];

  @Input() chartId: string = '';

  @Input() colorScheme: string = 'category10';

  @Input() innerRadius: number = 0;

  @Input() inverse: boolean = false;

  @Input() legend: boolean = false;

  @Input() legendFontSize: number = 12;

  @Input() legendMetric: string = 'label';

  @Input() legendWidth: number = 125;

  @Input() responsive: boolean = false;

  @Input() stroke: string = 'transparent';

  @Input() strokeWidth: number = 1;

  @Input() tooltips: boolean = false;

  @Input() valueFormat: string = 'raw';

  @Input() valueMetric: string = 'value';

  @Input() canvasWidth: number = 450;

  @Input() marginBottom: number = 0;

  @Input() marginLeft: number = 0;

  @Input() marginRight: number = 0;

  @Input() marginTop: number = 0;

  @Input() canvasHeight: number = 450;

  public data = pieChartData;

  private htmlElement: HTMLElement;

  constructor(public elRef: ElementRef) {
    this.htmlElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.htmlElement.querySelector('nexus-pie-chart').chartData = this.data;
  }
}
