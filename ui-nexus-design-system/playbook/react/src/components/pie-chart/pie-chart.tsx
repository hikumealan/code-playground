import React, { useEffect, useRef, useState } from 'react';
import { NexusPieChart, NexusCheckbox, NexusInput, NexusLabel, NexusSelect } from '@nexus/react';
import './pie-chart.scss';
import { JSX } from '@nexus/core';

const musicSalesData: any = [
  { artist: 'The Beatles', units: 183 },
  { artist: 'Garth Brooks', units: 148 },
  { artist: 'Elvis Presley', units: 146.5 },
  { artist: 'The Eagles', units: 120 },
  { artist: 'Led Zeppelin', units: 111.5 },
  { artist: 'Billy Joel', units: 84.5 },
  { artist: 'Michael Jackson', units: 84 },
  { artist: 'Elton John', units: 78.5 },
  { artist: 'Pink Floyd', units: 75 },
  { artist: 'AC/DC', units: 72 },
  { artist: 'George Strait', units: 69 },
  { artist: 'Barbara Streisand', units: 68.5 },
  { artist: 'The Rolling Stones', units: 66.5 },
  { artist: 'Aerosmith', units: 66.5 },
  { artist: 'Bruce Springsteen', units: 65.5 }
];

const initialValue: JSX.NexusPieChart = {
  chartData: musicSalesData,
  legend: false,
  legendWidth: 125,
  legendMetric: 'artist',
  responsive: true,
  stroke: 'white',
  tooltips: true,
  colorScheme: 'category10',
  valueFormat: 'localestring1d',
  valueMetric: 'units',
  innerRadius: 0,
  inverse: false,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  legendFontSize: 10,
  strokeWidth: 1
};

const App = () => {
  const chartElement = useRef(null);

  const [chartOptions, setChartOptions] = useState<JSX.NexusPieChart>(initialValue);
  const updateState = (field: keyof JSX.NexusPieChart, target: any) => {
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
  }, [chartOptions]);

  const selectTopN = (num: number) => {
    setChartOptions({
      ...chartOptions,
      chartData: musicSalesData.slice(0, num)
    });
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
   * @param field one of NexusPieChart Props
   * @param options options can be of anytype
   * @param label Label to be displayed above
   */
  const renderNexusSelect = (field: keyof JSX.NexusPieChart, options: any[], label: string) => (
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
   * @param field one of NexusPieChart Props
   * @param options options can be IOptions type
   * @param label Label to be displayed above
   */
  const renderSelctWithCustomOptions = (field: keyof JSX.NexusPieChart, options: IOptions[], label: string) => (
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
   * @param field : Props of NexusPieChart component
   */
  const renderNexusInput = (label: string, field: keyof JSX.NexusPieChart) => (
    <>
      <NexusLabel>{label}</NexusLabel>
      <NexusInput
        id="hideX"
        value={chartOptions[field]?.toString()}
        onInput={(e: any) => updateState(field, e.target)}
      />
    </>
  );
  /**
   * Returns a NexusCheckBox
   * @param field : Props of NexusPieChart component
   * @param label : string, label to be displayed
   */
  const renderCheckBox = (field: keyof JSX.NexusPieChart, label: string) => (
    <NexusCheckbox checked={chartOptions[field] as boolean} onClick={(e: any) => updateState(field, e.target)}>
      {label}
    </NexusCheckbox>
  );

  return (
    <>
      <div id="wrapper" className="nexus-row">
        <div className={`nexus-col-xs-4 nexus-col-lg-3 control-container`}>
          <div className='control-category'>Options</div>
          {wrapInControlItem(renderCheckBox('inverse', 'Inverse'))}
          {wrapInControlItem(renderCheckBox('legend', 'Legend'))}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'innerRadius',
              [
                { value: '0', label: '0' },
                { value: '0.25', label: '25%' },
                { value: '0.5', label: '50%' },
                { value: '0.75', label: '75%' },
                { value: '0.95', label: '95%' }
              ],
              'Inner Radius'
            )
          )}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'colorScheme',
              [
                { value: 'category10', label: 'category 10' },
                { value: 'accent', label: 'Accent' },
                { value: 'paired', label: 'Paired' },
                { value: 'set1', label: 'set 1' },
                { value: 'set2', label: 'set 2' },
                { value: 'set3', label: 'set 3' },
                { value: 'black', label: 'Black' },
                { value: 'gray', label: 'Gray' }
              ],
              'Color Scheme'
            )
          )}
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'legendFontSize',
              [
                { value: '10', label: '10px' },
                { value: '12', label: '12px' },
                { value: '14', label: '14px' }
              ],
              'Legend Font Size'
            )
          )}
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
          {wrapInControlItem(
            renderSelctWithCustomOptions(
              'stroke',
              [
                { value: 'transparent', label: 'transparent' },
                { value: '#ffffff', label: 'White' },
                { value: '#000000', label: 'Black' },
                { value: '#999999', label: 'Gray' }
              ],
              'Wedge Stroke'
            )
          )}
          {wrapInControlItem(renderNexusSelect('strokeWidth', [1, 2, 3, 4, 5], 'Wedge Stroke Width'))}
        </div>
        <div id="control-container" className={`nexus-col-xs-4 nexus-col-lg-9 chart-container`}>
          <div className='page-title'>&lt;nexus-pie-chart&gt;</div>
          <div className='hoz-group'>
            <span className='btn-item'>
              <button type="button" className="nexus-btn" onClick={() => selectTopN(5)}>
                Top 5
              </button>
            </span>
            <span className="btn-item">
              <button type="button" className="nexus-btn" onClick={() => selectTopN(10)}>
                Top 10
              </button>
            </span>
            <span className="btn-item">
              <button type="button" className="nexus-btn" onClick={() => selectTopN(15)}>
                Top 15
              </button>
            </span>
          </div>
          <div className={chartOptions['inverse'] ? 'chart-inverse' : 'chart'}>
            <NexusPieChart
              legend={chartOptions.legend}
              legendWidth={chartOptions.legendWidth}
              legendMetric={chartOptions.legendMetric}
              responsive
              stroke={chartOptions.stroke}
              tooltips={chartOptions.tooltips}
              valueFormat={chartOptions.valueFormat}
              valueMetric={chartOptions.valueMetric}
              innerRadius={chartOptions.innerRadius}
              chartData={chartOptions.chartData}
              inverse={chartOptions.inverse}
              colorScheme={chartOptions.colorScheme}
              legendFontSize={chartOptions.legendFontSize}
              marginBottom={chartOptions.marginBottom}
              marginLeft={chartOptions.marginLeft}
              marginRight={chartOptions.marginRight}
              marginTop={chartOptions.marginTop}
              strokeWidth={chartOptions.strokeWidth}
              ref={chartElement}
            ></NexusPieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;