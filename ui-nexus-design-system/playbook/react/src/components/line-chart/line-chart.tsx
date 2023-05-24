import React, { useEffect, useRef, useState } from 'react';
import { NexusLineChart, NexusCheckbox, NexusInput, NexusLabel, NexusSelect } from '@nexus/react';
import './line-chart';
import { JSX } from '@nexus/core';

const dat = new Date(1546318800000);

const msd = 86400000;

const data: Array<any> = [
  {
    label: 'User 1',
    name: 'Mark',
    data: [
      {
        x: dat.getTime() + msd * 10,
        y: 71
      },
      {
        x: dat.getTime() + msd * 20,
        y: 251
      },
      {
        x: dat.getTime() + msd * 30,
        y: 357
      },
      {
        x: dat.getTime() + msd * 40,
        y: 414
      },
      {
        x: dat.getTime() + msd * 50,
        y: 270
      },
      {
        x: dat.getTime() + msd * 60,
        y: 33
      }
    ]
  },
  {
    label: 'User 2',
    name: 'Fred',
    data: [
      {
        x: dat.getTime() + msd * 10,
        y: 418
      },
      {
        x: dat.getTime() + msd * 20,
        y: 380
      },
      {
        x: dat.getTime() + msd * 30,
        y: 393
      },
      {
        x: dat.getTime() + msd * 40,
        y: 107
      },
      {
        x: dat.getTime() + msd * 50,
        y: 3
      },
      {
        x: dat.getTime() + msd * 60,
        y: 333
      }
    ]
  },
  {
    label: 'User 3',
    name: 'Diane',
    data: [
      {
        x: dat.getTime() + msd * 10,
        y: 473
      },
      {
        x: dat.getTime() + msd * 20,
        y: 311
      },
      {
        x: dat.getTime() + msd * 30,
        y: 405
      },
      {
        x: dat.getTime() + msd * 40,
        y: 65
      },
      {
        x: dat.getTime() + msd * 50,
        y: 101
      },
      {
        x: dat.getTime() + msd * 60,
        y: 18
      }
    ]
  },
  {
    label: 'User 4',
    name: 'Jackie',
    data: [
      {
        x: dat.getTime() + msd * 10,
        y: 56
      },
      {
        x: dat.getTime() + msd * 20,
        y: -7
      },
      {
        x: dat.getTime() + msd * 30,
        y: 68
      },
      {
        x: dat.getTime() + msd * 40,
        y: -137
      },
      {
        x: dat.getTime() + msd * 50,
        y: 208
      },
      {
        x: dat.getTime() + msd * 60,
        y: 470
      }
    ]
  }
];

const initialValue = {
  showXLabel: true,
  showYLabel: true,
  chartData: data,
  chartId: 'NexusLineChart',
  axisLabelFontSize: 14,
  axisTickFontFamily: 'interstate',
  axisTickFontSize: 10,
  canvasHeight: 450,
  canvasWidth: 940,
  colorScheme: 'category10',
  gridlines: false,
  hideXAxis: false,
  hideXTicks: false,
  hideYAxis: false,
  hideYTicks: false,
  interpolation: 'linear',
  inverse: false,
  legend: true,
  legendFontSize: 12,
  legendMetric: 'label',
  legendWidth: 125,
  marginBottom: 25,
  marginLeft: 25,
  marginRight: 25,
  marginTop: 25,
  responsive: true,
  strokeWidth: 2,
  tooltips: true,
  vertices: true,
  xLabel: 'Date',
  xMetric: 'x',
  xTickFormat: 'M/D/YY',
  xTickSize: 2,
  yLabel: 'Score',
  yMetric: 'y',
  yTickFormat: 'localestring',
  yTickSize: 2
};

const App = () => {
  const chartElement = useRef(null);
  const [chartOptions, setChartOptions] = useState<any>(initialValue);
  const updateState = (field: any, target: any) => {
    console.log('target', target);
    let value = '';
    if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }
    setChartOptions({
      ...chartOptions,
      [field]: value
    });
  };

  useEffect(() => {
    console.log(chartOptions);
    if (chartOptions.hideXAxis) {
      chartOptions.hideXAxis = true;
      chartOptions.hideXTicks = true;
    } else {
      chartOptions.hideXAxis = false;
      chartOptions.hideXTicks = false;
    }
    if (chartOptions.hideYAxis) {
      chartOptions.hideYAxis = true;
      chartOptions.hideYTicks = true;
    } else {
      chartOptions.hideYAxis = false;
      chartOptions.hideYTicks = false;
    }
  }, [chartOptions]);

  const selectTopN = (num: number) => {
    setChartOptions({
      ...chartOptions,
      chartData: data.slice(0, num)
    });
  };

  const showHideXLabel = (event: any) => {
    if (event.target.checked) {
      setChartOptions({
        ...chartOptions,
        xLabel: 'Date'
      });
    } else {
      setChartOptions({
        ...chartOptions,
        xLabel: ''
      });
    }
  };
  const showHideYLabel = (event: any) => {
    if (event.target.checked) {
      setChartOptions({
        ...chartOptions,
        yLabel: 'Price'
      });
    } else {
      setChartOptions({
        ...chartOptions,
        yLabel: ''
      });
    }
  };
  interface IOptions {
    label: string;
    value: any;
  }

  /**
   *
   * @param component : Returns the component wrapped in a class for styling purpose
   */
  const wrapInControlItem = (component: React.ReactElement) => (
    <div className='control-item'>{component}</div>
  );
  /**
   *
   * @param field one of NexusLineChart Props
   * @param options options can be of anytype
   * @param label Label to be displayed above
   */
  const renderNexusSelect = (field: keyof JSX.NexusLineChart, options: any[], label: string) => (
    <>
      {' '}
      <NexusLabel className="select">{label}</NexusLabel>
      <NexusSelect value={chartOptions[field]?.toString()} onInput={(e: any) => updateState(field, e.target)}>
        {renderOptions(options)}
      </NexusSelect>
    </>
  );
  /**
   *
   * @param field one of NexusLineChart Props
   * @param options options can be IOptions type
   * @param label Label to be displayed above
   */
  const renderSelctWithCustomOptions = (field: keyof JSX.NexusLineChart, options: IOptions[], label: string) => (
    <>
      {' '}
      <NexusLabel className="select">{label}</NexusLabel>
      <NexusSelect value={chartOptions[field]?.toString()} onInput={(e: any) => updateState(field, e.target)}>
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
   * @param field : Props of NexusLineChart component
   */
  const renderNexusInput = (label: string, field: keyof JSX.NexusLineChart) => (
    <>
      <NexusLabel>{label}</NexusLabel>
      <NexusInput
        value={chartOptions[field]?.toString()}
        onInput={(e: any) => updateState(field, e.target)}
      ></NexusInput>
    </>
  );
  /**
   * Returns a NexusCheckBox
   * @param field : Props of NexusLineChart component
   * @param label : string, label to be displayed
   */
  const renderCheckBox = (field: any, label: string) => (
    <NexusCheckbox checked={chartOptions[field] as boolean} onClick={(e: any) => updateState(field, e.target)}>
      {label}
    </NexusCheckbox>
  );

  const selectNumLines = (num: number) => {
    setChartOptions({
      ...chartOptions,
      chartData: data.slice(0, num)
    });
  };

  const generateRandomData = () => {
    setChartOptions({
      ...chartOptions,
      chartData: data.slice(0, Math.floor(Math.random() * 5))
    });
  };

  return (
    <>
      <div id="wrapper" className="nexus-row">
        <div className={`nexus-col-xs-4 nexus-col-lg-3 control-container'`}>
          <div className='control-category'>X-Axis</div>

          <NexusCheckbox checked={chartOptions.showXLabel as boolean} onClick={(e: any) => showHideXLabel(e)}>
            Show Label
          </NexusCheckbox>
          {wrapInControlItem(renderCheckBox('hideXTicks', 'Hide Tick Values'))}
          {wrapInControlItem(renderCheckBox('hideXAxis', 'Hide Entire X-axis'))}
          {wrapInControlItem(renderNexusSelect('xTickSize', [2, 4, 10, 12, 16], 'Tick Size / Length'))}
          {wrapInControlItem(renderNexusInput('Label', 'xLabel'))}
          <div className='control-category'>Y-Axis</div>
          <NexusCheckbox checked={chartOptions.showYLabel as boolean} onClick={(e: any) => showHideYLabel(e)}>
            Show Label
          </NexusCheckbox>
          {wrapInControlItem(renderCheckBox('hideYTicks', 'Hide Tick Values'))}
          {wrapInControlItem(renderCheckBox('hideYAxis', 'Hide Entire Y-axis'))}
          {wrapInControlItem(renderNexusSelect('yTickSize', [2, 4, 10, 12, 16], 'Tick Size / Length'))}
          {wrapInControlItem(renderNexusInput('Label', 'yLabel'))}
          <div className='control-category'>Options</div>
          {wrapInControlItem(renderCheckBox('gridlines', 'Grid Lines'))}
          {wrapInControlItem(renderCheckBox('inverse', 'Inverse'))}
          {wrapInControlItem(renderCheckBox('legend', 'Legend'))}
          {wrapInControlItem(renderCheckBox('vertices', 'Vertices'))}
          {wrapInControlItem(renderNexusSelect('axisLabelFontSize', [9, 12, 14, 16, 20], 'Axis Label Font Size'))}
          {wrapInControlItem(
            renderNexusSelect(
              'axisTickFontFamily',
              ['interstate', 'sans-serif', 'serif', 'monospace'],
              'Axis Label Font Family'
            )
          )}
          {wrapInControlItem(renderNexusSelect('axisTickFontSize', [8, 9, 10, 12], 'Axis Tick Font Size'))}
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
              'Color Scheme'
            )
          )}
          {wrapInControlItem(renderNexusSelect('legendFontSize', [8, 9, 10, 12, 14, 16], 'Legend Font Size'))}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'interpolation',
              [
                { value: 'linear', label: 'Linear' },
                { value: 'basis', label: 'Basis' },
                { value: 'monotone', label: 'Monotone' },
                { value: 'step', label: 'Step' },
                { value: 'step-before', label: 'Step Before' },
                { value: 'step-after', label: 'Step After' }
              ],
              'Line Interpolation'
            )
          )}
          {wrapInControlItem(renderNexusSelect('strokeWidth', [1, 2, 3, 4], 'Line Stroke'))}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginBottom',
              [
                { value: '0', label: '0px' },
                { value: '25', label: '25px' },
                { value: '50', label: '50px' },
                { value: '100', label: '100px' },
                { value: '150', label: '150px' }
              ],
              'Margin Bottom'
            )
          )}

          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginLeft',
              [
                { value: '0', label: '0px' },
                { value: '25', label: '25px' },
                { value: '50', label: '50px' },
                { value: '100', label: '100px' },
                { value: '150', label: '150px' }
              ],
              'Margin Left'
            )
          )}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginRight',
              [
                { value: '0', label: '0px' },
                { value: '25', label: '25px' },
                { value: '50', label: '50px' },
                { value: '100', label: '100px' },
                { value: '150', label: '150px' }
              ],
              'Margin Right'
            )
          )}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'marginTop',
              [
                { value: '0', label: '0px' },
                { value: '25', label: '25px' },
                { value: '50', label: '50px' },
                { value: '100', label: '100px' },
                { value: '150', label: '150px' }
              ],
              'Margin Top'
            )
          )}
        </div>
        <div id="chart-container" className={`nexus-col-xs-4 nexus-col-lg-9 chart-container`}>
          <div className='page-title'>&lt;nexus-line-chart&gt;</div>
          <div className='hoz-group'>
            <span className='btn-item'>
              <button type="button" className="nexus-btn" onClick={(e: any) => selectNumLines(1)}>
                1 Line
              </button>
            </span>
            <span className='btn-item'>
              <button type="button" className="nexus-btn" onClick={(e: any) => selectNumLines(2)}>
                2 Lines
              </button>
            </span>
            <span className='btn-item'>
              <button type="button" className="nexus-btn" onClick={(e: any) => selectNumLines(3)}>
                3 Lines
              </button>
            </span>
            <span className='btn-item'>
              <button type="button" className="nexus-btn" onClick={(e: any) => selectNumLines(4)}>
                4 Lines
              </button>
            </span>
            <span className='btn-item'>
              <button type="button" className="nexus-btn" onClick={(e: any) => generateRandomData()}>
                Random
              </button>
            </span>
          </div>
          <div className={chartOptions['inverse'] ? 'chart-inverse' : 'chart'}>
            <NexusLineChart
              axisLabelFontSize={chartOptions.axisLabelFontSize}
              axisTickFontFamily={chartOptions.axisTickFontFamily}
              axisTickFontSize={chartOptions.axisTickFontSize}
              canvasHeight={chartOptions.canvasHeight}
              canvasWidth={chartOptions.canvasWidth}
              chartData={chartOptions.chartData}
              chartId={chartOptions.chartId}
              colorScheme={chartOptions.colorScheme}
              gridlines={chartOptions.gridlines}
              hideXAxis={chartOptions.hideXAxis}
              hideXTicks={chartOptions.hideXTicks}
              hideYAxis={chartOptions.hideYAxis}
              hideYTicks={chartOptions.hideYTicks}
              interpolation={chartOptions.interpolation}
              inverse={chartOptions.inverse}
              legend={chartOptions.legend}
              legendFontSize={chartOptions.legendFontSize}
              legendMetric={chartOptions.legendMetric}
              legendWidth={chartOptions.legendWidth}
              marginBottom={chartOptions.marginBottom}
              marginLeft={chartOptions.marginLeft}
              marginRight={chartOptions.marginRight}
              marginTop={chartOptions.marginTop}
              responsive={chartOptions.responsive}
              strokeWidth={chartOptions.strokeWidth}
              tooltips={chartOptions.tooltips}
              vertices={chartOptions.vertices}
              xLabel={chartOptions.xLabel}
              xMetric={chartOptions.xMetric}
              xTickFormat={chartOptions.xTickFormat}
              xTickSize={chartOptions.xTickSize}
              yLabel={chartOptions.yLabel}
              yMetric={chartOptions.yMetric}
              yTickFormat={chartOptions.yTickFormat}
              yTickSize={chartOptions.yTickSize}
            ></NexusLineChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;