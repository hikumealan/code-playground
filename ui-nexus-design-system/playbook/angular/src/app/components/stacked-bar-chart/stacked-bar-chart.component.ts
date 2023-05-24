/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-lines */
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {
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

  public currentTankCategory: any;

  public currentXLabel: any;

  public currentYLabel: any;

  public groupByConfiguration: any;

  public linearDomain: any;

  public selectedYears: any;

  public tankProductionData = [
    { year: '1941',
      combatant: 'Germany',
      armament: 'Light Tank',
      produced: 943 },
    { year: '1941',
      combatant: 'Germany',
      armament: 'Medium Tank',
      produced: 2680 },
    { year: '1941',
      combatant: 'Germany',
      armament: 'Heavy Tank',
      produced: 0 },
    { year: '1941',
      combatant: 'Soviet Union',
      armament: 'Light Tank',
      produced: 2321 },
    { year: '1941',
      combatant: 'Soviet Union',
      armament: 'Medium Tank',
      produced: 3016 },
    { year: '1941',
      combatant: 'Soviet Union',
      armament: 'Heavy Tank',
      produced: 1353 },
    { year: '1941',
      combatant: 'US',
      armament: 'Light Tank',
      produced: 2591 },
    { year: '1941',
      combatant: 'US',
      armament: 'Medium Tank',
      produced: 1430 },
    { year: '1941',
      combatant: 'US',
      armament: 'Heavy Tank',
      produced: 0 },
    { year: '1942',
      combatant: 'Germany',
      armament: 'Light Tank',
      produced: 1500 },
    { year: '1942',
      combatant: 'Germany',
      armament: 'Medium Tank',
      produced: 3952 },
    { year: '1942',
      combatant: 'Germany',
      armament: 'Heavy Tank',
      produced: 78 },
    { year: '1942',
      combatant: 'Soviet Union',
      armament: 'Light Tank',
      produced: 9580 },
    { year: '1942',
      combatant: 'Soviet Union',
      armament: 'Medium Tank',
      produced: 13473 },
    { year: '1942',
      combatant: 'Soviet Union',
      armament: 'Heavy Tank',
      produced: 2635 },
    { year: '1942',
      combatant: 'US',
      armament: 'Light Tank',
      produced: 10674 },
    { year: '1942',
      combatant: 'US',
      armament: 'Medium Tank',
      produced: 15720 },
    { year: '1942',
      combatant: 'US',
      armament: 'Heavy Tank',
      produced: 0 },
    { year: '1943',
      combatant: 'Germany',
      armament: 'Light Tank',
      produced: 1811 },
    { year: '1943',
      combatant: 'Germany',
      armament: 'Medium Tank',
      produced: 9050 },
    { year: '1943',
      combatant: 'Germany',
      armament: 'Heavy Tank',
      produced: 740 },
    { year: '1943',
      combatant: 'Soviet Union',
      armament: 'Light Tank',
      produced: 5512 },
    { year: '1943',
      combatant: 'Soviet Union',
      armament: 'Medium Tank',
      produced: 19808 },
    { year: '1943',
      combatant: 'Soviet Union',
      armament: 'Heavy Tank',
      produced: 1422 },
    { year: '1943',
      combatant: 'US',
      armament: 'Light Tank',
      produced: 9024 },
    { year: '1943',
      combatant: 'US',
      armament: 'Medium Tank',
      produced: 28164 },
    { year: '1943',
      combatant: 'US',
      armament: 'Heavy Tank',
      produced: 0 },
    { year: '1944',
      combatant: 'Germany',
      armament: 'Light Tank',
      produced: 2507 },
    { year: '1944',
      combatant: 'Germany',
      armament: 'Medium Tank',
      produced: 15380 },
    { year: '1944',
      combatant: 'Germany',
      armament: 'Heavy Tank',
      produced: 1069 },
    { year: '1944',
      combatant: 'Soviet Union',
      armament: 'Light Tank',
      produced: 7155 },
    { year: '1944',
      combatant: 'Soviet Union',
      armament: 'Medium Tank',
      produced: 22618 },
    { year: '1944',
      combatant: 'Soviet Union',
      armament: 'Heavy Tank',
      produced: 4764 },
    { year: '1944',
      combatant: 'US',
      armament: 'Light Tank',
      produced: 5738 },
    { year: '1944',
      combatant: 'US',
      armament: 'Medium Tank',
      produced: 15489 },
    { year: '1944',
      combatant: 'US',
      armament: 'Heavy Tank',
      produced: 40 },
    { year: '1945',
      combatant: 'Germany',
      armament: 'Light Tank',
      produced: 1335 },
    { year: '1945',
      combatant: 'Germany',
      armament: 'Medium Tank',
      produced: 2931 },
    { year: '1945',
      combatant: 'Germany',
      armament: 'Heavy Tank',
      produced: 140 },
    { year: '1945',
      combatant: 'Soviet Union',
      armament: 'Light Tank',
      produced: 2966 },
    { year: '1945',
      combatant: 'Soviet Union',
      armament: 'Medium Tank',
      produced: 16602 },
    { year: '1945',
      combatant: 'Soviet Union',
      armament: 'Heavy Tank',
      produced: 3100 },
    { year: '1945',
      combatant: 'US',
      armament: 'Light Tank',
      produced: 2801 },
    { year: '1945',
      combatant: 'US',
      armament: 'Medium Tank',
      produced: 8055 },
    { year: '1945',
      combatant: 'US',
      armament: 'Heavy Tank',
      produced: 2162 }
  ];

  private htmlElement: HTMLElement;

  constructor(public elRef: ElementRef) {
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

    this.currentTankCategory = 'Medium Tank';
    this.currentXLabel = 'Year';
    this.currentYLabel = 'Production';
    this.groupByConfiguration = 'year';
    this.linearDomain = 'absolute';
    this.selectedYears = ['1942', '1943', '1944'];

    this.htmlElement = this.elRef.nativeElement;
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

  public generateStackedBarChartData(): void {
    let filteredData: any;

    if (this.groupByConfiguration === 'country') {
      filteredData = this.tankProductionData.filter((fData) => fData.armament === this.currentTankCategory);
    } else {
      filteredData = this.tankProductionData.filter((fData) => this.selectedYears.indexOf(fData.year) >= 0 && fData.armament === this.currentTankCategory);
    }
    this.getChartEl('nexus-stacked-bar-chart').chartData = filteredData;
  }

  public selectGroupBy(): void {
    const groupBy = this.htmlElement.querySelector('#groupBy') as HTMLInputElement;
    const val = groupBy.value || 'year';
    const el = this.getChartEl('nexus-stacked-bar-chart');
    if (val === 'country') {
      el.ordinalMetric = 'combatant';
      el.seriesMetric = 'year';
      this.currentXLabel = 'Country';
      el.xLabel = 'Country';
    } else {
      el.ordinalMetric = 'year';
      el.seriesMetric = 'combatant';
      this.currentXLabel = 'Year';
      el.xLabel = 'Year';
    }
  }

  public selectTankCategory(): void {
    const tankCategory = this.htmlElement.querySelector('#tankCategory') as HTMLInputElement;
    const val = tankCategory.value || 'Light Tank';
    this.currentTankCategory = val;
    this.generateStackedBarChartData();
  }

  public togglePercent(): void {
    let tickFormat;
    const el = this.getChartEl('nexus-stacked-bar-chart');

    if (this.linearDomain === 'absolute') {
      this.linearDomain = 'percent';
      tickFormat = 'percent';
    } else {
      this.linearDomain = 'absolute';
      tickFormat = 'localestring';
    }
    el.linearDomain = this.linearDomain;
    el.linearTickFormat = tickFormat;
  }

  public yearCheck(year): void {
    const el = this.htmlElement.querySelector(`#year${year}`) as HTMLInputElement;
    if (el) {
      if (el.checked) {
        this.selectedYears.push(year);
      } else {
        this.selectedYears = this.selectedYears.filter((fData) => fData !== year);
      }
      this.generateStackedBarChartData();
    }
  }

  public addListeners(): any {
    const xLabelInputMethod = this.htmlElement.querySelector('#xLabelInput') as HTMLInputElement;
    xLabelInputMethod.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        const evtVal = evt.target as HTMLInputElement;
        this.changeXLabel('nexus-stacked-bar-chart', evtVal.value);
      }
    });

    const yLabelInputMethod = this.htmlElement.querySelector('#yLabelInput') as HTMLInputElement;
    yLabelInputMethod.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        const evtVal = evt.target as HTMLInputElement;
        this.changeYLabel('nexus-stacked-bar-chart', evtVal.value);
      }
    });
  }

  ngOnInit(): void {
    this.addListeners();
    const chartComponent = this.htmlElement.querySelector('#nexus-stacked-bar-chart') as HTMLInputElement;
    chartComponent.addEventListener('nexus-stacked-bar-chart-loaded', (evt) => {
      this.generateStackedBarChartData();
    });
  }
}
