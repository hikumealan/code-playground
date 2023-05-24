import React, { useEffect, useState } from 'react';

import { NexusBarChart, NexusCheckbox, NexusInput, NexusLabel, NexusSelect } from '@nexus/react';
import './bar-chart';
import { JSX } from '@nexus/core';
const barChartData = [
  { ticker: 'KO', name: 'Coca-Cola', value: 52.36 },
  { ticker: 'BZH', name: 'Beazer Homes', value: 11.11 },
  { ticker: 'ADM', name: 'Arch-Dan-Mid', value: 37.17 },
  { ticker: 'ABCB', name: 'Ameris Bancorp', value: 36.44 },
  { ticker: 'ORCL', name: 'Oracle', value: 53.75 },
  { ticker: 'MIL', name: 'MILD', value: 37.17 },
  { ticker: 'HCL', name: 'HCL', value: 36.44 },
  { ticker: 'MFL', name: 'Madras', value: 53.75 },
  { ticker: 'PLNT', name: 'Planet Fitness', value: 77.27 }
];
const initialValue: JSX.NexusBarChart = {
  chartData: barChartData,
  responsive: true,
  hideXAxis: false,
  xTickSize: 2,
  axisLabelFontSize: 10,
  axisTickFontFamily: 'interstate',
  axisTickFontSize: 12,
  xLabel: 'Ticker Symbol',
  yLabel: 'Price',
  hideXTicks: false,
  hideYAxis: false,
  yTickSize: 2,
  orientation: 'vertical',
  marginLeft: 50,
  marginRight: 10,
  marginBottom: 25,
  marginTop: 5,
  barStroke: 'transparent',
  barStrokeWidth: 1,
  maxBarWidth: 50,
  colorScheme: 'category10',
  gridlines: false,
  inverse: false,
  legend: true
};
interface IOptions {
  label: string;
  value: any;
}
const App = () => {
  const [chartOptions, setChartOptions] = useState<JSX.NexusBarChart>(initialValue);
  const updateState = (field: keyof JSX.NexusBarChart, value: any) =>
    setChartOptions({
      ...chartOptions,
      [field]: value
    });
  /**
   *
   * @param component : Returns the component wrapped in a class for styling purpose
   */
  const wrapInControlItem = (component: React.ReactElement) => (
    <div className='control-item'>{component}</div>
  );
  /**
   *
   * @param field one of NexusBarChart Props
   * @param options options can be of anytype
   * @param label Label to be displayed above
   */
  const renderNexusSelect = (field: keyof JSX.NexusBarChart, options: any[], label: string) => (
    <>
      {' '}
      <NexusLabel className="select">{label}</NexusLabel>
      <NexusSelect value={chartOptions[field]?.toString()} onInput={(e: any) => updateState(field, e.target.value)}>
        {renderOptions(options)}
      </NexusSelect>
    </>
  );
  /**
   *
   * @param field one of NexusBarChart Props
   * @param options options can be IOptions type
   * @param label Label to be displayed above
   */
  const renderSelctWithCustomOptions = (field: keyof JSX.NexusBarChart, options: IOptions[], label: string) => (
    <>
      {' '}
      <NexusLabel className="select">{label}</NexusLabel>
      <NexusSelect value={chartOptions[field]?.toString()} onInput={(e: any) => updateState(field, e.target.value)}>
        {renderOptionsWithDifferentValue(options)}
      </NexusSelect>
    </>
  );
  /**
   * Returns <Option> by looping through the array
   * @param options array of any type
   */
  const renderOptions = (options: any[]) =>
    options.map((singleOption) => <option value={singleOption}>{singleOption}</option>);
  const renderOptionsWithDifferentValue = (options: IOptions[]) =>
    options.map((singleOption) => <option value={singleOption.value}>{singleOption.label}</option>);

  /**
   * Returns NexusInput
   * @param label : string, label to be displayed
   * @param field : Props of NexusBarChart component
   */
  const renderNexusInput = (label: string, field: keyof JSX.NexusBarChart) => (
    <>
      <NexusLabel>{label}</NexusLabel>
      <NexusInput
        id="hideX"
        value={chartOptions[field]?.toString()}
        onInput={(e: any) => updateState(field, e.target.value)}
      />
    </>
  );
  /**
   * Returns a NexusCheckBox
   * @param field : Props of NexusBarChart component
   * @param label : string, label to be displayed
   */
  const renderCheckBox = (field: keyof JSX.NexusBarChart, label: string) => (
    <NexusCheckbox checked={chartOptions[field] as boolean} onClick={(e: any) => updateState(field, e.target.checked)}>
      {label}
    </NexusCheckbox>
  );

  const renderChart = () => (
    <div id="chart-container" className={`nexus-col-xs-4 nexus-col-lg-9 chart-container`}>
      <div className='page-title'>&lt;nexus-bar-chart&gt;</div>
      <p>Demonstrating a bar chart with stock ticker symbols / prices.</p>
      <div className={chartOptions['inverse'] ? 'chart-inverse' : 'chart'}>
        <NexusBarChart
          responsive
          chart-id="myStvBarChart"
          hideXAxis={chartOptions.hideXAxis}
          xTickSize={chartOptions.xTickSize}
          legendMetric="name"
          linearMetric="value"
          linear-tick-format="USD"
          margin-left="35"
          ordinal-metric="ticker"
          axisLabelFontSize={chartOptions.axisTickFontSize}
          axisTickFontFamily={chartOptions.axisTickFontFamily}
          axisTickFontSize={chartOptions.axisTickFontSize}
          x-label={chartOptions.xLabel}
          y-label={chartOptions.yLabel}
          hideXTicks={chartOptions.hideXTicks}
          hideYAxis={chartOptions.hideYAxis}
          yTickSize={chartOptions.yTickSize}
          chartData={chartOptions.chartData}
          orientation={chartOptions.orientation}
          marginLeft={chartOptions.marginLeft}
          marginRight={chartOptions.marginRight}
          marginBottom={chartOptions.marginBottom}
          marginTop={chartOptions.marginTop}
          barStroke={chartOptions.barStroke}
          barStrokeWidth={chartOptions.barStrokeWidth}
          maxBarWidth={chartOptions.maxBarWidth}
          colorScheme={chartOptions.colorScheme}
          gridlines={chartOptions.gridlines}
          inverse={chartOptions.inverse}
          legend={chartOptions.legend}
          tooltips={true}
        ></NexusBarChart>
      </div>
    </div>
  );
  useEffect(() => {
    console.log(chartOptions);
  }, [chartOptions]);
  return (
    <>
      <div id="wrapper" className="nexus-row">
        <div className={`nexus-col-xs-4 nexus-col-lg-3 control-category`}>
          <div className="control-category">X-axis</div>
          {wrapInControlItem(renderCheckBox('hideXAxis', 'Hide Entire X-axis'))}
          {wrapInControlItem(renderCheckBox('hideXTicks', 'Hide Tick Values'))}
          {wrapInControlItem(renderNexusSelect('xTickSize', [2, 4, 10, 12, 16], 'Tick Size / Length'))}
          {wrapInControlItem(renderNexusInput('X-label', 'xLabel'))}
          <div className="control-category">Y-axis</div>
          {wrapInControlItem(renderCheckBox('hideYAxis', 'Hide Entire Y-axis'))}
          {wrapInControlItem(renderCheckBox('hideYTicks', 'Hide Tick Values'))}
          {wrapInControlItem(renderNexusSelect('yTickSize', [2, 4, 10, 12, 16], 'Tick Size / Length'))}
          {wrapInControlItem(renderNexusInput('Y-label', 'yLabel'))}
          <div className="control-category">Options</div>
          {wrapInControlItem(renderCheckBox('gridlines', 'Show gridlines'))}
          {wrapInControlItem(renderCheckBox('inverse', 'Inverse'))}
          {wrapInControlItem(renderCheckBox('legend', 'Legend'))}
          <div className="control-category">Other axis stuff</div>
          {wrapInControlItem(renderNexusSelect('axisLabelFontSize', [9, 12, 14, 16, 20], 'Axis Label Font Size'))}
          {wrapInControlItem(
            renderNexusSelect(
              'axisTickFontFamily',
              ['interstate', 'sans-serif', 'serif', 'monospace'],
              'Axis Label Font Family'
            )
          )}
          {wrapInControlItem(renderNexusSelect('axisTickFontSize', [8, 9, 10, 12], 'Axis Tick Font Size'))}
          <div className="control-category">Bar Chart stuff</div>
          {wrapInControlItem(renderNexusSelect('barStrokeWidth', [0, 1, 2, 50], 'Bar Stroke Width'))}
          {wrapInControlItem(renderNexusSelect('maxBarWidth', [5, 25, 50, 75, 'fillSpace'], 'Max bar width'))}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'barStroke',
              [
                { label: 'Black', value: '#000000' },
                { label: 'White', value: '#fff' },
                { label: 'Gray', value: '#999999' }
              ],
              'Bar Stroke'
            )
          )}
          <div className="control-category">Color Scheme</div>
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'colorScheme',
              [
                { label: 'Category 10', value: 'category10' },
                { label: 'accent', value: 'Accent' },
                { label: 'Paired', value: 'paired' },
                { label: 'Set 1', value: 'set1' },
                { label: 'Set 2', value: 'set2' },
                { label: 'Set 3', value: 'set3' },
                { label: 'Black', value: 'black' }
              ],
              'Bar Stroke'
            )
          )}
          <div className="control-category">Orientation</div>
          {wrapInControlItem(renderNexusSelect('orientation', ['vertical', 'horizontal'], 'Orientation'))}
          <div className="control-category">Margin</div>
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginBottom',
              [
                { label: '25px', value: '25' },
                { label: '50px', value: '50' },
                { label: '75px', value: '75' }
              ],
              'Margin bottom'
            )
          )}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginTop',
              [
                { label: '25px', value: '25' },
                { label: '50px', value: '50' },
                { label: '75px', value: '75' }
              ],
              'Margin top'
            )
          )}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginLeft',
              [
                { label: '25px', value: '25' },
                { label: '50px', value: '50' },
                { label: '75px', value: '75' }
              ],
              'Margin left'
            )
          )}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginRight',
              [
                { label: '25px', value: '25' },
                { label: '50px', value: '50' },
                { label: '75px', value: '75' }
              ],
              'Margin right'
            )
          )}
        </div>
        {renderChart()}
      </div>
    </>
  );
};

export default App;