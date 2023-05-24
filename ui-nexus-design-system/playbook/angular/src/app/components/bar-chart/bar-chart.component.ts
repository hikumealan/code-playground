/* eslint-disable indent */
/* eslint-disable max-lines */
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public data: Array<any> = [
    {
      ticker: 'KO',
      name: 'Coca-Cola',
      value: 52.36
    },
    {
      ticker: 'BZH',
      name: 'Beazer Homes',
      value: 11.11
    },
    {
      ticker: 'ADM',
      name: 'Arch-Dan-Mid',
      value: 37.17
    },
    {
      ticker: 'ABCB',
      name: 'Ameris Bancorp',
      value: 36.44
    },
    {
      ticker: 'ORCL',
      name: 'Oracle',
      value: 53.75
    },
    {
      ticker: 'MIL',
      name: 'MILD',
      value: 37.17
    },
    {
      ticker: 'HCL',
      name: 'HCL',
      value: 36.44
    },
    {
      ticker: 'MFL',
      name: 'Madras',
      value: 53.75
    },
    {
      ticker: 'PLNT',
      name: 'Planet Fitness',
      value: 77.27
    }
  ];

  public gridlines: any;

  public inverse: any;

  public showLegend: any;

  public showPieLegend: any;

  public vertices: any;

  public hideYAxis: any;

  public showYLabel: any;

  public showYTicks: any;

  public hideXAxis: any;

  public showXLabel: any;

  public showXTicks: any;

  private htmlElement: HTMLElement;

  constructor(public elRef: ElementRef) {
    this.htmlElement = this.elRef.nativeElement;

    this.gridlines = false;
    this.inverse = false;
    this.showLegend = false;
    this.showPieLegend = true;
    this.vertices = true;

    this.hideYAxis = false;
    this.showYLabel = true;
    this.showYTicks = true;

    this.hideXAxis = false;
    this.showXLabel = true;
    this.showXTicks = true;
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

  public toggleShowHideXAxis(args: string): void {
    this.hideXAxis = !this.hideXAxis;
    const el = this.getChartEl(args);

    if (this.hideXAxis) {
      el.xLabel = '';
      el.hideXAxis = true;
      el.hideXTicks = true;

      this.showXLabel = false;
      this.showXTicks = false;

      const xLabelItem = this.htmlElement.querySelector('#xLabel') as HTMLInputElement;
      xLabelItem.checked = false;
      xLabelItem.disabled = true;

      const xTicksItem = this.htmlElement.querySelector('#xTicks') as HTMLInputElement;
      xTicksItem.checked = false;
      xTicksItem.disabled = true;
    } else {
      el.xLabel = 'Date';
      el.hideXAxis = false;
      el.hideXTicks = false;

      this.showXLabel = true;
      this.showXTicks = true;

      const xLabelItem1 = this.htmlElement.querySelector('#xLabel') as HTMLInputElement;
      xLabelItem1.checked = true;
      xLabelItem1.disabled = false;

      const xTicksItem1 = this.htmlElement.querySelector('#xTicks') as HTMLInputElement;
      xTicksItem1.checked = true;
      xTicksItem1.disabled = false;
    }
  }

  public toggleShowHideXLabel(args: string): void {
    this.showXLabel = !this.showXLabel;
    let label: any;
    label = '';
    switch (args) {
      default:
        label = 'Date';
        break;
    }
    this.getChartEl(args).xLabel = this.showXLabel ? label : '';
  }

  public toggleShowHideXTicks(args: string): void {
    this.showXTicks = !this.showXTicks;
    this.getChartEl(args).hideXTicks = !this.showXTicks;
  }

  public toggleShowHideYAxis(args: string): void {
    this.hideYAxis = !this.hideYAxis;
    const el = this.getChartEl(args);

    if (this.hideYAxis) {
      el.yLabel = '';
      el.hideYAxis = true;
      el.hideYTicks = true;

      this.showYLabel = false;
      this.showYTicks = false;

      const yLabelItem2 = this.htmlElement.querySelector('#yLabel') as HTMLInputElement;
      yLabelItem2.checked = false;
      yLabelItem2.disabled = true;

      const yTicksItem2 = this.htmlElement.querySelector('#yTicks') as HTMLInputElement;
      yTicksItem2.checked = false;
      yTicksItem2.disabled = true;
    } else {
      el.yLabel = 'Score';
      el.hideYAxis = false;
      el.hideYTicks = false;

      this.showYLabel = true;
      this.showYTicks = true;

      const yLabelItem3 = this.htmlElement.querySelector('#yLabel') as HTMLInputElement;
      yLabelItem3.checked = true;
      yLabelItem3.disabled = false;
      const yTicksItem3 = this.htmlElement.querySelector('#yTicks') as HTMLInputElement;
      yTicksItem3.checked = true;
      yTicksItem3.disabled = false;
    }
  }

  public toggleShowHideYLabel(args: string): void {
    this.showYLabel = !this.showYLabel;
    this.getChartEl(args).yLabel = this.showYLabel ? 'Score' : '';
  }

  public toggleShowHideYTicks(args: string): void {
    this.showYTicks = !this.showYTicks;
    this.getChartEl(args).hideYTicks = !this.showYTicks;
  }

  public generateBarChartData(numBars: number): any {
    this.data.sort((aItem, bItem) => aItem.ticker > bItem.ticker ? 1 : -1);

    return this.data.slice(0, numBars);
  }

  public selectNumBars(numBars: number): any {
    this.getChartEl('nexus-bar-chart').chartData = this.generateBarChartData(numBars);
  }

  public addListeners(): void {
    const xLabelInputMethod = this.htmlElement.querySelector('#xLabelInput') as HTMLInputElement;
    xLabelInputMethod.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        const evtVal = evt.target as HTMLInputElement;
        this.changeXLabel('nexus-bar-chart', evtVal.value);
      }
    });

    const yLabelInputMethod = this.htmlElement.querySelector('#yLabelInput') as HTMLInputElement;
    yLabelInputMethod.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        const evtVal = evt.target as HTMLInputElement;
        this.changeYLabel('nexus-bar-chart', evtVal.value);
      }
    });
  }

  ngOnInit(): void {
    this.htmlElement.querySelector('nexus-bar-chart').chartData = this.generateBarChartData(3);
    this.addListeners();
    this.selectNumBars(9);
  }
}
