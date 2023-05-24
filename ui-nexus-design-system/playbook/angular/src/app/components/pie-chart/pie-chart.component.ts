/* eslint-disable max-lines */
/* eslint-disable id-length */

import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public chartData: Array<any> = [
    { artist: 'The Beatles',
      units: 183 },
    { artist: 'Garth Brooks',
      units: 148 },
    { artist: 'Elvis Presley',
      units: 146.5 },
    { artist: 'The Eagles',
      units: 120 },
    { artist: 'Led Zeppelin',
      units: 111.5 },
    { artist: 'Billy Joel',
      units: 84.5 },
    { artist: 'Michael Jackson',
      units: 84 },
    { artist: 'Elton John',
      units: 78.5 },
    { artist: 'Pink Floyd',
      units: 75 },
    { artist: 'AC/DC',
      units: 72 },
    { artist: 'George Strait',
      units: 69 },
    { artist: 'Barbara Streisand',
      units: 68.5 },
    { artist: 'The Rolling Stones',
      units: 66.5 },
    { artist: 'Aerosmith',
      units: 66.5 },
    { artist: 'Bruce Springsteen',
      units: 65.5 }
  ];

  private gridlines = false;

  private inverse = false;

  private showLegend = false;

  private showPieLegend = true;

  private vertices = true;

  private htmlElement: HTMLElement;

  constructor(public elRef: ElementRef) {
    this.htmlElement = this.elRef.nativeElement;

    this.gridlines = false;
    this.inverse = false;
    this.showLegend = false;
    this.showPieLegend = true;
    this.vertices = true;
  }

  public changeXLabel(args: any, value: any): any {
    this.getChartEl(args).xLabel = value;
    const xLabelInput = this.htmlElement.querySelector('#xLabelInput') as HTMLInputElement;
    xLabelInput.value = '';
  }

  public changeYLabel(args: any, value: any): any {
    this.getChartEl(args).yLabel = value;
    const yLabelInput = this.htmlElement.querySelector('#yLabelInput') as HTMLInputElement;
    yLabelInput.value = '';
  }

  public getChartEl(id: string): any {
    return document.querySelector(id);
  }

  public randomizer(): any {
    return Math.floor(Math.random() * 500) - 250;
  }

  public selectArcStroke(args: string): any {
    const arcStroke = this.htmlElement.querySelector('#arcStroke') as HTMLInputElement;
    this.getChartEl(args).stroke = arcStroke.value;
  }

  public selectAxisLabelFontSize(args: string): void {
    const axisLabelFontSize = this.htmlElement.querySelector('#axisLabelFontSize') as HTMLInputElement;
    this.getChartEl(args).axisLabelFontSize = axisLabelFontSize.value;
  }

  public selectAxisTickFontSize(args: string): void {
    const axisTickFontSize = this.htmlElement.querySelector('#axisTickFontSize') as HTMLInputElement;
    this.getChartEl(args).axisTickFontSize = axisTickFontSize.value;
  }

  public selectAxisTickFontFamily(args: string): void {
    const axisTickFontFamily = this.htmlElement.querySelector('#axisTickFontFamily') as HTMLInputElement;
    this.getChartEl(args).axisTickFontFamily = axisTickFontFamily.value;
  }

  public selectBarStroke(args: string): void {
    const barStroke = this.htmlElement.querySelector('#barStroke') as HTMLInputElement;
    this.getChartEl(args).barStroke = barStroke.value;
  }

  public selectBarStrokeWidth(args: string): void {
    const barStrokeWidth = this.htmlElement.querySelector('#barStrokeWidth') as HTMLInputElement;
    this.getChartEl(args).barStrokeWidth = barStrokeWidth.value;
  }

  public selectColorScheme(args: string): void {
    const colorScheme = this.htmlElement.querySelector('#colorScheme') as HTMLInputElement;
    this.getChartEl(args).colorScheme = colorScheme.value;
  }

  public selectInnerRadius(args: string): void {
    const innerRadius = this.htmlElement.querySelector('#innerRadius') as HTMLInputElement;
    this.getChartEl(args).innerRadius = innerRadius.value;
  }

  public selectInterpolation(args: string): void {
    const interpolation = this.htmlElement.querySelector('#interpolation') as HTMLInputElement;
    this.getChartEl(args).interpolation = interpolation.value;
  }

  public selectLegendFontSize(args: string): void {
    const legendFontSize = this.htmlElement.querySelector('#legendFontSize') as HTMLInputElement;
    this.getChartEl(args).legendFontSize = legendFontSize.value;
  }

  public selectLinearDomain(args: string): void {
    const val = this.htmlElement.querySelector('#linearDomain') as HTMLInputElement;
    const el = this.getChartEl(args);
    if (val.value === 'percent') {
      el.linearTickFormat = 'percent1d';
    } else {
      el.linearTickFormat = 'localestring';
    }
    this.getChartEl(args).linearDomain = val.value;
  }

  public selectLineStroke(args: string): void {
    const val = this.htmlElement.querySelector('#lineStroke') as HTMLInputElement;
    this.getChartEl(args).strokeWidth = val.value;
  }

  public selectMargin(marginAttribute: string, args: any): any {
    const val = this.htmlElement.querySelector(`#${marginAttribute}`) as HTMLInputElement;
    const el = this.getChartEl(args);
    el[marginAttribute] = val.value;
  }

  public selectMaxBarWidth(args: string): void {
    const val = this.htmlElement.querySelector('#maxBarWidth') as HTMLInputElement;
    this.getChartEl(args).maxBarWidth = val.value;
  }

  public selectXTickSize(args: string): void {
    const val = this.htmlElement.querySelector('#xTickSize') as HTMLInputElement;
    this.getChartEl(args).xTickSize = val.value;
  }

  public selectYTickSize(args: string): void {
    const val = this.htmlElement.querySelector('#yTickSize') as HTMLInputElement;
    this.getChartEl(args).yTickSize = val.value;
  }

  public toggleGridlines(args: string): void {
    this.gridlines = !this.gridlines;
    this.getChartEl(args).gridlines = this.gridlines;
  }

  public toggleInverse(args: string): void {
    this.inverse = !this.inverse;
    this.getChartEl(args).inverse = this.inverse;

    if (this.inverse) {
      this.htmlElement.querySelector('div.chart').classList.add('inverse');
    } else {
      this.htmlElement.querySelector('div.chart').classList.remove('inverse');
    }
  }

  public toggleLegend(args: string): void {
    if (args === 'nexus-pie-chart') {
      this.showPieLegend = !this.showPieLegend;
      this.getChartEl(args).legend = this.showPieLegend;

      return;
    }

    this.showLegend = !this.showLegend;

    this.getChartEl(args).legend = this.showLegend;
  }

  public toggleOrientation(args: string): void {
    const orientationValue = this.htmlElement.querySelector('#orientation') as HTMLInputElement;
    const val = orientationValue.value || 'vertical';
    const el = this.getChartEl(args);
    let xLabel: any;
    let yLabel: any;

    // horizontal orientation
    if (val === 'horizontal') {
      if (args === 'nexus-stacked-bar-chart') {
        xLabel = 'Production';
        yLabel = 'Year';
      } else {
        xLabel = 'Price';
        yLabel = 'Ticker Symbol';
      }
    } else if (args === 'nexus-stacked-bar-chart') {
      xLabel = 'Year';
      yLabel = 'Production';
    } else {
      xLabel = 'Ticker Symbol';
      yLabel = 'Price';
    }

    el.orientation = val;
    el.xLabel = xLabel;
    el.yLabel = yLabel;
  }

  public toggleVertices(args: string): void {
    this.vertices = !this.vertices;
    this.getChartEl(args).vertices = this.vertices;
  }

  public generatePieChartData(numWedges: number): any {
    return this.chartData.slice(0, numWedges);
  }

  public selectTopN(num: number): any {
    this.getChartEl('nexus-pie-chart').chartData = this.generatePieChartData(num);
  }

  public addListeners(): void {
    const chartComponent = this.htmlElement.querySelector('#nexus-pie-chart') as HTMLInputElement;
    chartComponent.addEventListener('nexus-pie-chart-loaded', (evt) => {
      this.htmlElement.querySelector('nexus-pie-chart').chartData = this.generatePieChartData(3);
    });
  }

  ngOnInit(): void {
    this.selectTopN(5);
  }
}
