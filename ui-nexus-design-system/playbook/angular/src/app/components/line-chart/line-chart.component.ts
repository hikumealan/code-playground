/* eslint-disable max-lines */
/* eslint-disable id-length */

import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public gridlines: any;

  public inverse: any;

  public showLegend: any;

  public showPieLegend: any;

  public vertices: any;

  public hideXAxis: any;

  public showXLabel: any;

  public showXTicks: any;

  public showYLabel: any;

  public showYTicks: any;

  public dat = new Date();

  public msd = 86400000;

  public data: Array<any> = [
    {
      label: 'User 1',
      name: 'Mark',
      data: [
        {
          x: this.dat.getTime() + (this.msd * 10),
          y: 71
        },
        {
          x: this.dat.getTime() + (this.msd * 20),
          y: 251
        },
        {
          x: this.dat.getTime() + (this.msd * 30),
          y: 357
        },
        {
          x: this.dat.getTime() + (this.msd * 40),
          y: 414
        },
        {
          x: this.dat.getTime() + (this.msd * 50),
          y: 270
        },
        {
          x: this.dat.getTime() + (this.msd * 60),
          y: 33
        }
      ]
    },
    {
      label: 'User 2',
      name: 'Fred',
      data: [
        {
          x: this.dat.getTime() + (this.msd * 10),
          y: 418
        },
        {
          x: this.dat.getTime() + (this.msd * 20),
          y: 380
        },
        {
          x: this.dat.getTime() + (this.msd * 30),
          y: 393
        },
        {
          x: this.dat.getTime() + (this.msd * 40),
          y: 107
        },
        {
          x: this.dat.getTime() + (this.msd * 50),
          y: 3
        },
        {
          x: this.dat.getTime() + (this.msd * 60),
          y: 333
        }
      ]
    },
    {
      label: 'User 3',
      name: 'Diane',
      data: [
        {
          x: this.dat.getTime() + (this.msd * 10),
          y: 473
        },
        {
          x: this.dat.getTime() + (this.msd * 20),
          y: 311
        },
        {
          x: this.dat.getTime() + (this.msd * 30),
          y: 405
        },
        {
          x: this.dat.getTime() + (this.msd * 40),
          y: 65
        },
        {
          x: this.dat.getTime() + (this.msd * 50),
          y: 101
        },
        {
          x: this.dat.getTime() + (this.msd * 60),
          y: 18
        }
      ]
    },
    {
      label: 'User 4',
      name: 'Jackie',
      data: [
        {
          x: this.dat.getTime() + (this.msd * 10),
          y: 56
        },
        {
          x: this.dat.getTime() + (this.msd * 20),
          y: -7
        },
        {
          x: this.dat.getTime() + (this.msd * 30),
          y: 68
        },
        {
          x: this.dat.getTime() + (this.msd * 40),
          y: -137
        },
        {
          x: this.dat.getTime() + (this.msd * 50),
          y: 208
        },
        {
          x: this.dat.getTime() + (this.msd * 60),
          y: 470
        }
      ]
    }
  ];

  private htmlElement: HTMLElement;

  private hideYAxis: any;

  constructor(public elRef: ElementRef) {
    this.htmlElement = this.elRef.nativeElement;

    this.gridlines = false;
    this.inverse = false;
    this.showLegend = false;
    this.showPieLegend = true;
    this.vertices = true;
    this.hideXAxis = false;
    this.showXLabel = true;
    this.showXTicks = true;
  }

  public changeXLabel(args: any, value: any) {
    this.getChartEl(args).xLabel = value;
    const xLabelInput = this.htmlElement.querySelector('#xLabelInput') as HTMLInputElement;
    xLabelInput.value = '';
  }

  public changeYLabel(args: any, value: any) {
    this.getChartEl(args).yLabel = value;
    const yLabelInput = this.htmlElement.querySelector('#yLabelInput') as HTMLInputElement;
    yLabelInput.value = '';
  }

  public getChartEl(id: any): any {
    return this.htmlElement.querySelector(id);
  }

  public randomizer(): any {
    return Math.floor(Math.random() * 500) - 250;
  }

  public selectArcStroke(args: any): any {
    const arcStroke = this.htmlElement.querySelector('#arcStroke') as HTMLInputElement;
    this.getChartEl(args).stroke = arcStroke.value;
  }

  public selectAxisLabelFontSize(args: any): any {
    const axisLabelFontSize = this.htmlElement.querySelector('#axisLabelFontSize') as HTMLInputElement;
    this.getChartEl(args).axisLabelFontSize = axisLabelFontSize.value;
  }

  public selectAxisTickFontSize(args: any): any {
    const axisTickFontSize = this.htmlElement.querySelector('#axisTickFontSize') as HTMLInputElement;
    this.getChartEl(args).axisTickFontSize = axisTickFontSize.value;
  }

  public selectAxisTickFontFamily(args: any): any {
    const axisTickFontFamily = this.htmlElement.querySelector('#axisTickFontFamily') as HTMLInputElement;
    this.getChartEl(args).axisTickFontFamily = axisTickFontFamily.value;
  }

  public selectBarStroke(args: any): any {
    const barStroke = this.htmlElement.querySelector('#barStroke') as HTMLInputElement;
    this.getChartEl(args).barStroke = barStroke.value;
  }

  public selectBarStrokeWidth(args: any): any {
    const barStrokeWidth = this.htmlElement.querySelector('#barStrokeWidth') as HTMLInputElement;
    this.getChartEl(args).barStrokeWidth = barStrokeWidth.value;
  }

  public selectColorScheme(args: any): any {
    const colorScheme = this.htmlElement.querySelector('#colorScheme') as HTMLInputElement;
    this.getChartEl(args).colorScheme = colorScheme.value;
  }

  public selectInnerRadius(args: any): any {
    const innerRadius = this.htmlElement.querySelector('#innerRadius') as HTMLInputElement;
    this.getChartEl(args).innerRadius = innerRadius.value;
  }

  public selectInterpolation(args: any): any {
    const interpolation = this.htmlElement.querySelector('#interpolation') as HTMLInputElement;
    this.getChartEl(args).interpolation = interpolation.value;
  }

  public selectLegendFontSize(args: any): any {
    const legendFontSize = this.htmlElement.querySelector('#legendFontSize') as HTMLInputElement;
    this.getChartEl(args).legendFontSize = legendFontSize.value;
  }

  public selectLinearDomain(args: any): any {
    const val = this.htmlElement.querySelector('#linearDomain') as HTMLInputElement;
    const el = this.getChartEl(args);
    if (val.value === 'percent') {
      el.linearTickFormat = 'percent1d';
    } else {
      el.linearTickFormat = 'localestring';
    }
    this.getChartEl(args).linearDomain = val.value;
  }

  public selectLineStroke(args: any): any {
    const val = this.htmlElement.querySelector('#lineStroke') as HTMLInputElement;
    this.getChartEl(args).strokeWidth = val.value;
  }

  public selectMargin(marginAttribute: any, args: any): any {
    const val = this.htmlElement.querySelector(`#${marginAttribute}`) as HTMLInputElement;
    const el = this.getChartEl(args);
    el[marginAttribute] = val.value;
  }

  public selectMaxBarWidth(args: any): any {
    const val = this.htmlElement.querySelector('#maxBarWidth') as HTMLInputElement;
    this.getChartEl(args).maxBarWidth = val.value;
  }

  public selectXTickSize(args: any): any {
    const val = this.htmlElement.querySelector('#xTickSize') as HTMLInputElement;
    this.getChartEl(args).xTickSize = val.value;
  }

  public selectYTickSize(args: any): any {
    const val = this.htmlElement.querySelector('#yTickSize') as HTMLInputElement;
    this.getChartEl(args).yTickSize = val.value;
  }

  public toggleGridlines(args: any): any {
    this.gridlines = !this.gridlines;
    this.getChartEl(args).gridlines = this.gridlines;
  }

  public toggleInverse(args: any): any {
    this.inverse = !this.inverse;
    this.getChartEl(args).inverse = this.inverse;

    if (this.inverse) {
      this.htmlElement.querySelector('div.chart').classList.add('inverse');
    } else {
      this.htmlElement.querySelector('div.chart').classList.remove('inverse');
    }
  }

  public toggleLegend(args: any): any {
    if (args === 'nexus-pie-chart') {
      this.showPieLegend = !this.showPieLegend;
      this.getChartEl(args).legend = this.showPieLegend;

      return;
    }

    this.showLegend = !this.showLegend;

    this.getChartEl(args).legend = this.showLegend;
  }

  public toggleOrientation(args: any): any {
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

  public toggleVertices(args: any): any {
    this.vertices = !this.vertices;
    this.getChartEl(args).vertices = this.vertices;
  }

  public toggleShowHideXAxis(args: any): any {
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

  public toggleShowHideXLabel(args: any): any {
    this.showXLabel = !this.showXLabel;
    this.getChartEl(args).xLabel = this.showXLabel ? 'Date' : '';
  }

  public toggleShowHideYLabel(args: any) {
    this.showYLabel = !this.showYLabel;
    this.getChartEl(args).yLabel = this.showYLabel ? 'Score' : '';
  }

  public toggleShowHideXTicks(args: any) {
    this.showXTicks = !this.showXTicks;
    this.getChartEl(args).hideXTicks = !this.showXTicks;
  }

  public toggleShowHideYAxis(args: any): any {
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


  toggleShowHideYTicks(args: any): any {
    this.showYTicks = !this.showYTicks;
    this.getChartEl(args).hideYTicks = !this.showYTicks;
  }

  public generateLineChartData(numLines: any): any {
    const dat = new Date(1546318800000);
    const msd = 86400000;

    return this.data.slice(0, numLines);
  }

  public generateRandomLineChartData(): any {
    const dat = new Date(1546318800000);
    const msd = 86400000;
    const iterations = Math.floor(Math.random() * 6) + 1;
    /* const data = []; */

    for (let i = 0; i < iterations; i++) {
      const u = i + 1;
      const user = `User ${u}`;

      this.data.push({
        label: user,
        name: user.toUpperCase(),
        data: [
          {
            x: dat.getTime() + (this.msd * 10),
            y: this.randomizer()
          },
          {
            x: dat.getTime() + (this.msd * 20),
            y: this.randomizer()
          },
          {
            x: dat.getTime() + (this.msd * 30),
            y: this.randomizer()
          },
          {
            x: dat.getTime() + (this.msd * 40),
            y: this.randomizer()
          },
          {
            x: dat.getTime() + (this.msd * 50),
            y: this.randomizer()
          },
          {
            x: dat.getTime() + (this.msd * 60),
            y: this.randomizer()
          }
        ]
      });
    }

    return this.data;
  }

  public generateRandomData(): any {
    this.getChartEl('nexus-line-chart').chartData = this.generateRandomLineChartData();
  }

  public selectNumLines(numLines: any): any {
    const chData = this.generateLineChartData(numLines);
    this.getChartEl('nexus-line-chart').chartData = chData;
  }

  public addListeners(): any {
    const xLabelInputMethod = this.htmlElement.querySelector('#xLabelInput') as HTMLInputElement;
    xLabelInputMethod.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        const evtVal = evt.target as HTMLInputElement;
        this.changeXLabel('nexus-line-chart', evtVal.value);
      }
    });

    const yLabelInputMethod = this.htmlElement.querySelector('#yLabelInput') as HTMLInputElement;
    yLabelInputMethod.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        const evtVal = evt.target as HTMLInputElement;
        this.changeYLabel('nexus-line-chart', evtVal.value);
      }
    });
  }

  ngOnInit(): void {
    this.htmlElement.querySelector('nexus-line-chart').chartData = this.generateLineChartData(3);
    this.addListeners();
    this.selectNumLines(8);
    this.htmlElement.querySelector('nexus-line-chart').canvasHeight = 450;
  }
}
