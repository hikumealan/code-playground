/**
 * src/components/nexus-bar-chart/nexus-bar-chart.tsx
 */
import { Component, h, Prop, Element, Event, EventEmitter, Listen } from '@stencil/core';
import isArray from 'lodash/isArray';
import { event } from 'd3';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';
import { schemeCategory10, schemeAccent, schemePaired, schemeSet1, schemeSet2, schemeSet3 } from 'd3-scale-chromatic';
import { Selection, select } from 'd3-selection';
import { orientationProp, colorSchemeProp, barStrokeProp, axisTickFontFamilyProp, axisTickFontSizeProp, strokeWidthProp, legendFontSizeProp, TickFormatProp } from '../utils/chartsTypes'

import {
  calculateAxisClass,
  calculateAxisLabelClass,
  calculateLegendLabelClass,
  t25,
  t50,
  t100,
  t250,
  t500,
  tickFormat
} from '../utils';
import { NexusBarChartProps } from '../interfaces/nexus-bar-chart';

@Component({
  tag: 'nexus-bar-chart',
  styleUrl: 'nexus-bar-chart.scss',
  shadow: true
})
export class NexusBarChart {
  colorScale: any;
  colorSchemes: any = {
    category10: schemeCategory10,
    accent: schemeAccent,
    paired: schemePaired,
    set1: schemeSet1,
    set2: schemeSet2,
    set3: schemeSet3,
    black: ['#000000'],
    gray: ['#888888']
  };

  defaultLineOpacity: number = 0.7;

  // <g> elements
  gCanvas: Selection<Element, any, HTMLElement, any>;
  gGrid: Selection<Element, any, HTMLElement, any>;
  gLegend: Selection<Element, any, HTMLElement, any>;
  gXAxis: Selection<Element, any, HTMLElement, any>;
  gYAxis: Selection<Element, any, HTMLElement, any>;
  // end </g>

  linearMax: number;
  linearScale: any;
  maxTooltipWidth: number = 125;
  ordinalPadding: number = 0.1;
  ordinalScale: any;
  svg: Selection<Element, any, HTMLElement, any>;
  tooltipDiv: Selection<Element, any, HTMLElement, any>;
  xAxis: any;
  xLabelPadding: number = 30;
  yAxis: any;
  yLabelPadding: number = 30;

  @Element() private chartElement: HTMLElement;

  /**
   * Label font size
   */
  @Prop() axisLabelFontSize: number;
  /**
   * Tick font family.
   */
  @Prop() axisTickFontFamily: axisTickFontFamilyProp = 'interstate';
  /**
  * Tick font size. Valid values are 8, 9, 10, 12.
   */
  @Prop() axisTickFontSize: axisTickFontSizeProp;
  /**
  * Bar edge color. Valid values are 'transparent', 'black', 'white' and 'gray'.
   */
  @Prop() barStroke: barStrokeProp = 'transparent';
  /**
   * Bar stroke width. Valid values are 'none', 1, 2 and 5.
   */
  @Prop() barStrokeWidth: strokeWidthProp;
  /**
   * Canvas Height
   */
  @Prop({
    reflect: true,
    mutable: true
  }) canvasHeight: number;

  /**
   * Canvas Width
   */
  @Prop({
    reflect: true,
    mutable: true
  }) canvasWidth: number;

  /**
   * Nexus bar chart props
   */
  @Prop() chartData: NexusBarChartProps[] = [];
  /**
   * Chart unique Identifier
   */
  @Prop() chartId: string = '';
  /**
   * Chart color scheme. Valid values are 'category10', 'accent', "paired", 'set1', 'set2', 'set3', 'black' and 'gray'.
   */
  @Prop() colorScheme: colorSchemeProp = 'category10';
  /**
   * Show/Hide grid lines. Default value is 'false'.
   */
  @Prop() gridlines: boolean = false;
  /**
   * Hide X-Axis. Default value is 'false'.
   */
  @Prop() hideXAxis: boolean = false;
  /**
   * Hide X-Ticks. Default value is 'false'.
   */
  @Prop() hideXTicks: boolean = false;
  /**
   * Hide Y-Axis. Default value is 'false'.
   */
  @Prop() hideYAxis: boolean = false;
  /**
   * Hide Y-Ticks. Default value is 'false'.
   */
  @Prop() hideYTicks: boolean = false;
  /**
   * Invert background colors. Default value is 'false'
   */
  @Prop() inverse: boolean = false;
  /**
   * Should display legend. Default value is 'true'.
   */
  @Prop() legend: boolean = true;
  /**
   * Set legend font size. Valid values are 10, 12, 14.
   */
  @Prop() legendFontSize: legendFontSizeProp;
  /**
   * Set legend metric string to key from your data set. For example: dataSet = [{ make: 'Volkswagen', model: 'ID4', year: '2020', }]  Then legendMetric = 'make'.
   */
  @Prop() legendMetric: string;
  /**
   * Set legend width.
   */
  @Prop() legendWidth: number;
  /**
   * Set linear metric string to key from your data set. For example: dataSet = [{ make: 'Volkswagen', model: 'ID4', year: '2020', }]  Then linearMetric = 'make'.
   */
  @Prop() linearMetric: string;
  /**
   * Set linear tick format. Valid values are 'USD', 'localestring', 'localestring1d', 'localestring2d', 'percent', 'percent1d', 'percent2d', 'YYYY', 'M/D/YYYY', 'M/D/YY', 'MM/DD/YYYY', 'MM YYYY', 'MMM D, YYYY', 'ISODATE', 'raw'
   */
  @Prop() linearTickFormat: TickFormatProp;
  /**
   * Canvas margin bottom offset. Default value is 25.
   */
  @Prop({ reflect: true }) marginBottom: number = 25;
  /**
   * Canvas margin left offset. Default value is 25.
   */
  @Prop({ reflect: true }) marginLeft: number = 25;
  /**
   * Canvas margin right offset. Default value is 25.
   */
  @Prop({ reflect: true }) marginRight: number = 25;
  /**
   * Canvas margin top offset. Default value is 25.
   */
  @Prop({ reflect: true }) marginTop: number = 25;
  /**
   * Maximum Bar width.
   */
  @Prop() maxBarWidth: number;
  /**
   * Set ordinal metic string to key from your data set. For example: dataSet = [{ make: 'Volkswagen', model: 'ID4', year: '2020', }]  Then ordinalMetric = 'make'.
   */
  @Prop() ordinalMetric: string;
  /**
   * Orientation of the graph. Default value is 'vertical'. Valid values are 'horizontal' and 'vertical'.
   */
  @Prop() orientation: orientationProp = 'vertical';
  /**
   * Is graph responsive. Default value is 'true'.
   */
  @Prop() responsive: boolean = false;
  /**
   * show/hide tooltips. Default value is 'false'.
   */
  @Prop() tooltips: boolean = false;
  /**
   * Label on x-axis. Default value is ''.
   */
  @Prop() xLabel: string = '';
  /**
   * X-axis tick size.
   */
  @Prop() xTickSize: number;
  /**
   * Label on x-axis. Default value is ''.
   */
  @Prop() yLabel: string = '';
  /**
   * Y-axis tick size.
   */
  @Prop() yTickSize: number;

  /**
   * On load even on loading bar chart ('nexusBarChartLoaded').
   */
  @Event({
    eventName: 'nexusBarChartLoaded',
    bubbles: true,
    composed: true
  }) componentLoaded: EventEmitter;

  //
  // LIFECYCLE
  //
  componentDidLoad(): void {
    this.svg = select(this.chartElement.shadowRoot.querySelector('svg.nexus-bar-chart'));
    this.gCanvas = this.svg.append('svg:g').attr('class', 'canvas');
    this.gGrid = this.gCanvas.append('svg:g').attr('class', 'grid');
    this.gLegend = this.svg.append('svg:g').attr('class', 'legend');

    this.gXAxis = this.gCanvas
      .append('svg:g')
      .attr('class', calculateAxisClass(this.inverse, this.axisTickFontFamily))
      .style('opacity', 0)
      .style('font-size', `${this.axisTickFontSize}px`);

    this.gYAxis = this.gCanvas
      .append('svg:g')
      .attr('class', calculateAxisClass(this.inverse, this.axisTickFontFamily))
      .style('opacity', 0)
      .style('font-size', `${this.axisTickFontSize}px`);

    // tooltip <div>
    this.tooltipDiv = select(this.chartElement.shadowRoot.querySelector('#tooltip'))
      .attr('class', 'tooltip')
      .style('opacity', 0);

    // responsive
    if (this.responsive && this.chartElement.parentElement.getBoundingClientRect().width > 50 && this.chartElement.parentElement.getBoundingClientRect().height > 50) {
      this.canvasWidth = this.chartElement.parentElement.getBoundingClientRect().width;
      this.canvasHeight = this.chartElement.parentElement.getBoundingClientRect().height;
    }

    // basic X/Y axis positions which will not change
    this.xAxis = axisBottom();
    this.yAxis = axisLeft();

    // color scale
    this.colorScale = scaleOrdinal();

    // emit component loaded event
    this.componentLoaded.emit({
      component: 'nexus-bar-chart',
      chartId: this.chartId
    });
  }

  componentDidUpdate(): void {
    if (this.isValidChartData()) {
      this.draw();
    }
  }

  //
  // LISTENERS
  //
  @Listen('resize', { target: 'window' })
  handleWindowResize() {
    if (this.responsive && this.isValidChartData()) {
      this.canvasWidth = this.chartElement.parentElement.getBoundingClientRect().width;
      this.draw();
    }
  }

  //
  // CLASS METHODS
  //

  /**
   * @function
   * Call axis generators for horizontal orientation
   */
  callHorizontalAxes(): void {
    // X is linear
    this.gXAxis
      .style('font-size', `${this.axisTickFontSize}px`)
      .attr('class', calculateAxisClass(this.inverse, this.axisTickFontFamily))
      .attr('transform', () => {
        if (this.chartData.length === 0) {
          return;
        }
        const xCoordinate = this.marginLeft + this.yLabelAdjustment();
        const yCoordinate = this.canvasHeight - this.marginBottom - this.xLabelAdjustment();

        return `translate(${xCoordinate}, ${yCoordinate})`;
      })
      .style('opacity', () => this.hideXAxis || this.chartData.length === 0 ? 0 : 1).call(this.xAxis);

    // Y is ordinal
    this.gYAxis
      .style('font-size', `${this.axisTickFontSize}px`)
      .attr('class', calculateAxisClass(this.inverse, this.axisTickFontFamily))
      .attr('transform', () => {
        if (this.chartData.length === 0) {
          return;
        }

        const xCoordinate = this.marginLeft + this.yLabelAdjustment();
        const yCoordinate = this.linearScale(0);

        return `translate(${xCoordinate}, ${yCoordinate})`;
      })
      .style('opacity', () => this.hideYAxis || this.chartData.length === 0 ? 0 : 1)
      .call(this.yAxis);
  }

  /**
   * @function
   * Call the axis generators for vertical orientation
   */
  callVerticalAxes(): void {
    // X is ordinal
    this.gXAxis
      .style('font-size', `${this.axisTickFontSize}px`)
      .attr('class', calculateAxisClass(this.inverse, this.axisTickFontFamily))
      .attr('transform', () => {
        if (this.chartData.length === 0) {
          return;
        }
        const xCoordinate = this.marginLeft;
        const yCoordinate = this.linearScale(0);

        return `translate(${xCoordinate}, ${yCoordinate})`;
      })
      .style('opacity', () => this.hideXAxis || this.chartData.length === 0 ? 0 : 1)
      .call(this.xAxis);

    // Y is linear
    this.gYAxis
      .style('font-size', `${this.axisTickFontSize}px`)
      .attr('class', calculateAxisClass(this.inverse, this.axisTickFontFamily))
      .attr('transform', () => {
        if (this.chartData.length === 0) {
          return;
        }

        const xCoordinate = this.marginLeft + this.yLabelAdjustment();
        const yCoordinate = 0;

        return `translate(${xCoordinate}, ${yCoordinate})`;
      })
      .style('opacity', () => this.hideYAxis || this.chartData.length === 0 ? 0 : 1)
      .call(this.yAxis);
  }

  /**
   * @function
   * Wrapper function for drawing
   */
  draw(): void {
    this.setColorScale();
    if (this.orientation === 'horizontal') {
      this.setHorizontalScales();
      this.callHorizontalAxes();
      this.handleHorizontalBars();
    }
    else {
      this.setVerticalScales();
      this.callVerticalAxes();
      this.handleVerticalBars();
    }
    this.handleGridlines();
    this.handleAxisLabels();
    this.handleLegend();
  }

  /**
   * @function
   * Render X/Y axis labels, if available
   */
  handleAxisLabels(): void {
    // X
    if (this.isValidXLabel()) {
      this.gCanvas.selectAll('text.x-axis-label').remove();

      this.gCanvas
        .append('text')
        .attr('class', calculateAxisLabelClass(this.inverse, 'x'))
        .style('font-size', `${this.axisLabelFontSize}px`)
        .style('text-anchor', 'middle')
        .text(this.xLabel)
        .attr('transform', () => {
          // x position depends on orientation
          let xCoordinate;
          xCoordinate = this.marginLeft + this.yLabelAdjustment();
          if (this.orientation === 'horizontal') {
            xCoordinate += (this.linearScale.range()[1] - this.linearScale.range()[0]) / 2;
          }
          else {
            xCoordinate += (this.ordinalScale.range()[1] - this.ordinalScale.range()[0]) / 2;
          }
          const yCoordinate = this.canvasHeight - (this.xLabelPadding / 2);

          return `translate(${xCoordinate}, ${yCoordinate})`;
        });
    }
    else {
      this.gCanvas.selectAll('text.x-axis-label').transition(t100).style('opacity', 0).remove();
    }

    // Y
    if (this.isValidYLabel()) {
      this.gCanvas.selectAll('text.y-axis-label').remove();
      this.gCanvas
        .append('text')
        .attr('class', calculateAxisLabelClass(this.inverse, 'y'))
        .style('font-size', `${this.axisLabelFontSize}px`)
        .style('text-anchor', 'middle')
        .text(this.yLabel)
        .attr('transform', () => {
          const xCoordinate = this.xLabelPadding / 2;
          const yCoordinate = this.marginTop + ((this.canvasHeight - this.marginBottom - this.marginTop - this.xLabelAdjustment()) / 2);

          return `translate(${xCoordinate}, ${yCoordinate}), rotate(-90)`;
        });
    }
    else {
      this.gCanvas.selectAll('text.y-axis-label').transition(t100).style('opacity', 0).remove();
    }
  }

  /**
   * @function
   * Render grid lines, depending on orientation
   * Scales must be set before this method will work properly and it should
   * be called before drawing bars due to z-index
   */
  handleGridlines(): void {
    if (!this.gridlines) {
      this.gGrid.selectAll('line.gridline').transition(t500).style('opacity', 0).remove();

      return;
    }

    const gridSelection = this.gGrid.selectAll('line.gridline').data(this.linearScale.ticks());

    gridSelection.exit().remove();

    const sel = gridSelection
      .enter()
      .append('svg:line')
      .attr('class', 'gridline')
      .style('stroke', '#bbb')
      .style('stroke-width', 0.5)
      .style('stroke-dasharray', '7,3')
      .style('opacity', 0);

    if (this.orientation === 'horizontal') {
      sel.merge(gridSelection)
        .attr('x1', (dimension) => this.marginLeft + this.yLabelAdjustment() + this.linearScale(dimension))
        .attr('x2', (dimension) => this.marginLeft + this.yLabelAdjustment() + this.linearScale(dimension))
        .attr('y1', this.marginTop)
        .transition(t100)
        .style('opacity', 1)
        .attr('y2', () => this.canvasHeight - this.marginBottom - this.xLabelAdjustment());
    }
    else {
      sel.merge(gridSelection)
        .attr('x1', () => this.marginLeft + this.yLabelAdjustment())
        .attr('y1', (dimension) => this.linearScale(dimension))
        .attr('y2', (dimension) => this.linearScale(dimension))
        .transition(t100)
        .style('opacity', 1)
        .attr('x2', () => this.canvasWidth - this.marginRight - this.legendAdjustment());
    }
  }

  /**
   * @function
   * Draw bars...horizontal orientation
   */
  handleHorizontalBars(): void {
    const barSel = this.gCanvas.selectAll('rect.bar').data(this.chartData);
    barSel.exit().remove();
    barSel
      .enter()
      .append('rect')
      .style('opacity', 0)
      .attr('rx', 3)
      .attr('ry', 3)
      .attr('class', 'bar')
      .on('mouseover', (dimension, index, array) => {
        select(array[index]).style('opacity', 1);

        this.tooltipDiv
          .style('left', () => `${event.pageX}px`)
          .style('top', () => `${event.pageY + 15}px`)
          .style('opacity', () => this.tooltips ? 0.9 : 0)
          .html(() => `
                <div class="key">
                ${dimension[this.ordinalMetric]}
                </div>
                <div class="value">
                ${tickFormat(dimension[this.linearMetric], this.linearTickFormat)}
                </div>`)
      })
      .on('mouseout', (_dimension, index, array) => {
        select(array[index]).style('opacity', 0.75);

        this.tooltipDiv.style('opacity', 0).html('');
      })
      .on('mousemove', () => {
        this.tooltipDiv.style('left', `${event.pageX}px`).style('top', `${event.pageY + 15}px`);
      })
      .merge(barSel)
      .style('stroke', this.barStroke)
      .style('stroke-width', this.barStrokeWidth)
      .transition(t250)
      .attr('x', () => this.marginLeft + this.yLabelAdjustment())
      .attr('y', (dimension) => this.ordinalScale(dimension[this.ordinalMetric]) + (this.ordinalScale.bandwidth() / 2) - (Math.min(this.maxBarWidth, this.ordinalScale.bandwidth()) / 2))
      .attr('width', (dimension) => this.linearScale(dimension[this.linearMetric]))
      .attr('height', () => Math.min(this.maxBarWidth, this.ordinalScale.bandwidth()))
      .style('fill', (dimension, index) => dimension.color || this.colorScale(index))
      .transition(t50)
      .style('opacity', 0.75);
  }

  /**
   * @function
   * Optional legend
   */
  handleLegend(): void {
    const lineIncrement = 25;

    // adjust position of gLegend
    this.gLegend.attr('transform', () => {
      const xCoordinate = this.canvasWidth - this.legendWidth;
      const yCoordinate = this.marginTop;

      return `translate(${xCoordinate}, ${yCoordinate})`;
    });

    //
    // legend is in play
    //
    if (this.legend) {
      // legend lines
      const lineSel = this.gLegend.selectAll('line.legend-line').data(this.chartData);

      lineSel.exit().remove();

      lineSel
        .enter()
        .append('line')
        .attr('class', 'legend-line')
        .attr('x1', 0)
        .attr('x2', 10)
        .style('opacity', 0)
        .style('stroke-width', 3)
        .merge(lineSel)
        .transition(t100)
        .attr('y1', (_dimension, index) => index * lineIncrement)
        .attr('y2', (_dimension, index) => index * lineIncrement)
        .style('stroke', (dimension, index) => dimension.color || this.colorScale(index))
        .transition(t25)
        .style('opacity', this.defaultLineOpacity);

      // legend text
      const textSel = this.gLegend.selectAll('text.legend-label').data(this.chartData);

      textSel.exit().remove();

      textSel
        .enter()
        .append('text')
        .style('fill', '#555')
        .style('opacity', 0)
        .on('mouseover', (_dimension, index) => {
          this.gCanvas
            .selectAll('rect.bar')
            .filter((_entry, jIndex) => index === jIndex)
            .style('opacity', 1);
        })
        .on('mouseout', (_dimension, index) => {
          this.gCanvas
            .selectAll('rect.bar')
            .filter((_entry, jIndex) => index === jIndex)
            .style('opacity', 0.75);
        })
        .merge(textSel)
        .attr('class', calculateLegendLabelClass(this.inverse))
        .style('font-size', `${this.legendFontSize}px`)
        .text((dimension) => dimension[this.legendMetric] || '')
        .transition(t100)
        .attr('x', 15)
        .attr('y', (_dimension, index) => (index * lineIncrement) + 4)
        .transition(t100)
        .style('opacity', 0.9);
    }
    else {
      this.gLegend.selectAll('line.legend-line').remove();
      this.gLegend.selectAll('text').remove();
    }
  }

  /**
   * @function
   * Draw bars, horizontal orientation
   */
  handleVerticalBars(): void {
    const barSel = this.gCanvas.selectAll('rect.bar').data(this.chartData);

    barSel.exit().remove();

    barSel
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .style('opacity', 0)
      .attr('rx', 3)
      .attr('ry', 3)
      .on('mouseover', (dimension, index, array) => {
        select(array[index]).style('opacity', 1);

        this.tooltipDiv
          .style('left', () => `${event.pageX}px`)
          .style('top', () => `${event.pageY + 15}px`)
          .style('opacity', () => this.tooltips ? 0.9 : 0)
          .html(() => `<div class="key">
              ${dimension[this.ordinalMetric]}
              </div>
              <div class="value">
              ${tickFormat(dimension[this.linearMetric], this.linearTickFormat)}
              </div>`);
      })
      .on('mouseout', (_dimension, index, array) => {
        select(array[index]).style('opacity', 0.75);
        this.tooltipDiv.style('opacity', 0).html('');
      })
      .on('mousemove', () => {
        this.tooltipDiv
          .style('left', () => `${event.pageX}px`)
          .style('top', () => `${event.pageY + 15}px`);
      })
      .merge(barSel)
      .style('stroke', this.barStroke)
      .style('stroke-width', this.barStrokeWidth)
      .transition(t250)
      .attr('x', (dimension) => this.marginLeft + this.ordinalScale(dimension[this.ordinalMetric]) + (this.ordinalScale.bandwidth() / 2) - (Math.min(this.maxBarWidth, this.ordinalScale.bandwidth()) / 2))
      .attr('y', (dimension) => this.linearScale(dimension[this.linearMetric]))
      .attr('width', () => Math.min(this.maxBarWidth, this.ordinalScale.bandwidth()))
      .attr('height', (dimension) => this.linearScale(0) - this.linearScale(dimension[this.linearMetric]))
      .style('fill', (dimension, index) => dimension.color || this.colorScale(index))
      .transition(t50)
      .style('opacity', 0.75);
  }

  isValidChartData(): boolean {
    return (
      isArray(this.chartData) && this.chartData.length > 0 && this.linearMetric in this.chartData[0] && this.ordinalMetric in this.chartData[0]
    );
  }

  isValidXLabel(): boolean {
    return this.xLabel && this.xLabel.length > 0 && !this.hideXAxis;
  }

  isValidYLabel(): boolean {
    return this.yLabel && this.yLabel.length > 0 && !this.hideYAxis;
  }

  legendAdjustment(): number {
    return this.legend ? this.legendWidth : 0;
  }

  /**
   * @function
   * Set the back-up color scale
   */
  setColorScale(): void {
    if (this.colorSchemes[this.colorScheme]) {
      this.colorScale.range(this.colorSchemes[this.colorScheme]);
    }
    else {
      this.colorScale.range(schemeCategory10);
    }
  }

  /**
   * @function
   * Calculate X/Y scales for horizontal orientation
   */
  setHorizontalScales(): void {
    // max linear value
    this.linearMax = Math.max(
      ...this.chartData.map((metric) => metric[this.linearMetric] || 0)
    );

    // X = linear scale
    this.linearScale = scaleLinear()
      .domain([0, this.linearMax])
      .range([
        0,
        this.canvasWidth - this.marginLeft - this.marginRight - this.legendAdjustment() - this.yLabelAdjustment()
      ])
      .nice();

    // linear axis generator
    this.xAxis
      .scale(this.linearScale)
      .tickSize(this.xTickSize)
      .tickValues(this.hideXTicks ? [] : null)
      .tickFormat((dimension) => tickFormat(dimension, this.linearTickFormat));

    // Y = ordinal scale
    this.ordinalScale = scaleBand()
      .domain(this.chartData.map((metric) => metric[this.ordinalMetric]))
      .rangeRound([this.marginTop, this.canvasHeight - this.marginBottom - this.xLabelAdjustment()])
      .padding(this.ordinalPadding);

    // ordinal axis generators
    this.yAxis
      .scale(this.ordinalScale)
      .tickSize(this.yTickSize)
      .tickValues(this.hideYTicks ? [] : null);
  }

  /**
   * @function
   * X/Y scales for vertical (default) orientation
   */
  setVerticalScales(): void {
    // X is ordinal
    this.ordinalScale = scaleBand()
      .domain(
        this.chartData.map((metric) => metric[this.ordinalMetric])
      )
      .rangeRound([
        this.yLabelAdjustment(),
        this.canvasWidth - this.marginLeft - this.marginRight - this.legendAdjustment()
      ])
      .padding(this.ordinalPadding);

    // ordinal axis generator
    this.xAxis
      .scale(this.ordinalScale)
      .tickSize(this.xTickSize)
      .tickValues(this.hideXTicks ? [] : null);

    // max linear value
    this.linearMax = Math.max(
      ...this.chartData.map((metric) => metric[this.linearMetric] || 0)
    );

    // Y is linear
    this.linearScale = scaleLinear()
      .domain([0, this.linearMax])
      .range([this.canvasHeight - this.marginBottom - this.xLabelAdjustment(), this.marginTop])
      .nice();

    // linear axis generator
    this.yAxis
      .scale(this.linearScale)
      .tickSize(this.yTickSize)
      .tickValues(this.hideYTicks ? [] : null)
      .tickFormat((dimension) => tickFormat(dimension, this.linearTickFormat));
  }

  xLabelAdjustment(): number {
    return this.isValidXLabel() ? this.xLabelPadding : 0;
  }

  yLabelAdjustment(): number {
    return this.isValidYLabel() ? this.yLabelPadding : 0;
  }

  render() {
    return (
      <div>
        <div id="tooltip"></div>
        <svg
          version="1.1"
          baseProfile="full"
          width={this.canvasWidth}
          height={this.canvasHeight}
          class="nexus-bar-chart"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
    );
  }
}
