/* eslint-disable id-length */
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './01_line-chart.component.html'
})
export default class LineChartComponent implements OnInit {
  @Input() axisLabelFontSize: number = 14;

  @Input() axisTickFontFamily: string = 'interstate';

  @Input() axisTickFontSize: number = 10;

  @Input() chartId: string = '';

  @Input() canvasHeight: number = 500;

  @Input() canvasWidth: number = 200;

  @Input() colorScheme: string = 'category10';

  @Input() gridlines: boolean = false;

  @Input() hideXAxis: boolean = false;

  @Input() hideXTicks: boolean = false;

  @Input() hideYAxis: boolean = false;

  @Input() hideYTicks: boolean = false;

  @Input() interpolation: string = 'linear';

  @Input() inverse: boolean = false;

  @Input() marginBottom: number = 25;

  @Input() marginLeft: number = 25;

  @Input() marginRight: number = 25;

  @Input() marginTop: number = 25;

  @Input() legend: boolean = false;

  @Input() legendFontSize: number = 12;

  @Input() legendMetric: string = 'label';

  @Input() legendWidth: number = 125;

  @Input() responsive: boolean = false;

  @Input() strokeWidth: number = 1;

  @Input() tooltips: boolean = true;

  @Input() vertices: boolean = false;

  @Input() xLabel: string = '';

  @Input() xMetric: string = 'x';

  @Input() xTickFormat: string = 'raw';

  @Input() xTickSize: number = 2;

  @Input() yLabel: string = '';

  @Input() yMetric: string = 'y';

  @Input() yTickFormat: string = 'raw';

  @Input() yTickSize: number = 2;

  public date = new Date(1546318800000);

  public msd = 86400000;

  public lineChartData: Array<any> = [
    {
      label: 'User 1',
      name: 'Mark',
      data: [
        {
          x: this.date.getTime() + (this.msd * 10),
          y: 71
        },
        {
          x: this.date.getTime() + (this.msd * 20),
          y: 251
        },
        {
          x: this.date.getTime() + (this.msd * 30),
          y: 357
        },
        {
          x: this.date.getTime() + (this.msd * 40),
          y: 414
        },
        {
          x: this.date.getTime() + (this.msd * 50),
          y: 270
        },
        {
          x: this.date.getTime() + (this.msd * 60),
          y: 33
        }
      ]
    },
    {
      label: 'User 2',
      name: 'Fred',
      data: [
        {
          x: this.date.getTime() + (this.msd * 10),
          y: 418
        },
        {
          x: this.date.getTime() + (this.msd * 20),
          y: 380
        },
        {
          x: this.date.getTime() + (this.msd * 30),
          y: 393
        },
        {
          x: this.date.getTime() + (this.msd * 40),
          y: 107
        },
        {
          x: this.date.getTime() + (this.msd * 50),
          y: 3
        },
        {
          x: this.date.getTime() + (this.msd * 60),
          y: 333
        }
      ]
    },
    {
      label: 'User 3',
      name: 'Diane',
      data: [
        {
          x: this.date.getTime() + (this.msd * 10),
          y: 473
        },
        {
          x: this.date.getTime() + (this.msd * 20),
          y: 311
        },
        {
          x: this.date.getTime() + (this.msd * 30),
          y: 405
        },
        {
          x: this.date.getTime() + (this.msd * 40),
          y: 65
        },
        {
          x: this.date.getTime() + (this.msd * 50),
          y: 101
        },
        {
          x: this.date.getTime() + (this.msd * 60),
          y: 18
        }
      ]
    },
    {
      label: 'User 4',
      name: 'Jackie',
      data: [
        {
          x: this.date.getTime() + (this.msd * 10),
          y: 56
        },
        {
          x: this.date.getTime() + (this.msd * 20),
          y: -7
        },
        {
          x: this.date.getTime() + (this.msd * 30),
          y: 68
        },
        {
          x: this.date.getTime() + (this.msd * 40),
          y: -137
        },
        {
          x: this.date.getTime() + (this.msd * 50),
          y: 208
        },
        {
          x: this.date.getTime() + (this.msd * 60),
          y: 470
        }
      ]
    }
  ];

  private htmlElement: HTMLElement;

  constructor(public elRef: ElementRef) { }

  ngOnInit(): void {
    this.htmlElement.querySelector('nexus-line-chart').chartData = this.lineChartData;
  }
}
