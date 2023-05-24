import React, { useState, useEffect } from 'react';
import './stacked-bar-chart.scss';
import { NexusCheckbox, NexusLabel, NexusSelect, NexusInput, NexusStackedBarChart } from '@nexus/react';
import { JSX } from '@nexus/core';

const data: Array<any> = [
  { year: '1941', combatant: 'Germany', armament: 'Light Tank', produced: 943 },
  { year: '1941', combatant: 'Germany', armament: 'Medium Tank', produced: 2680 },
  { year: '1941', combatant: 'Germany', armament: 'Heavy Tank', produced: 0 },
  { year: '1941', combatant: 'Soviet Union', armament: 'Light Tank', produced: 2321 },
  { year: '1941', combatant: 'Soviet Union', armament: 'Medium Tank', produced: 3016 },
  { year: '1941', combatant: 'Soviet Union', armament: 'Heavy Tank', produced: 1353 },
  { year: '1941', combatant: 'US', armament: 'Light Tank', produced: 2591 },
  { year: '1941', combatant: 'US', armament: 'Medium Tank', produced: 1430 },
  { year: '1941', combatant: 'US', armament: 'Heavy Tank', produced: 0 },
  { year: '1942', combatant: 'Germany', armament: 'Light Tank', produced: 1500 },
  { year: '1942', combatant: 'Germany', armament: 'Medium Tank', produced: 3952 },
  { year: '1942', combatant: 'Germany', armament: 'Heavy Tank', produced: 78 },
  { year: '1942', combatant: 'Soviet Union', armament: 'Light Tank', produced: 9580 },
  { year: '1942', combatant: 'Soviet Union', armament: 'Medium Tank', produced: 13473 },
  { year: '1942', combatant: 'Soviet Union', armament: 'Heavy Tank', produced: 2635 },
  { year: '1942', combatant: 'US', armament: 'Light Tank', produced: 10674 },
  { year: '1942', combatant: 'US', armament: 'Medium Tank', produced: 15720 },
  { year: '1942', combatant: 'US', armament: 'Heavy Tank', produced: 0 },
  { year: '1943', combatant: 'Germany', armament: 'Light Tank', produced: 1811 },
  { year: '1943', combatant: 'Germany', armament: 'Medium Tank', produced: 9050 },
  { year: '1943', combatant: 'Germany', armament: 'Heavy Tank', produced: 740 },
  { year: '1943', combatant: 'Soviet Union', armament: 'Light Tank', produced: 5512 },
  { year: '1943', combatant: 'Soviet Union', armament: 'Medium Tank', produced: 19808 },
  { year: '1943', combatant: 'Soviet Union', armament: 'Heavy Tank', produced: 1422 },
  { year: '1943', combatant: 'US', armament: 'Light Tank', produced: 9024 },
  { year: '1943', combatant: 'US', armament: 'Medium Tank', produced: 28164 },
  { year: '1943', combatant: 'US', armament: 'Heavy Tank', produced: 0 },
  { year: '1944', combatant: 'Germany', armament: 'Light Tank', produced: 2507 },
  { year: '1944', combatant: 'Germany', armament: 'Medium Tank', produced: 15380 },
  { year: '1944', combatant: 'Germany', armament: 'Heavy Tank', produced: 1069 },
  { year: '1944', combatant: 'Soviet Union', armament: 'Light Tank', produced: 7155 },
  { year: '1944', combatant: 'Soviet Union', armament: 'Medium Tank', produced: 22618 },
  { year: '1944', combatant: 'Soviet Union', armament: 'Heavy Tank', produced: 4764 },
  { year: '1944', combatant: 'US', armament: 'Light Tank', produced: 5738 },
  { year: '1944', combatant: 'US', armament: 'Medium Tank', produced: 15489 },
  { year: '1944', combatant: 'US', armament: 'Heavy Tank', produced: 40 },
  { year: '1945', combatant: 'Germany', armament: 'Light Tank', produced: 1335 },
  { year: '1945', combatant: 'Germany', armament: 'Medium Tank', produced: 2931 },
  { year: '1945', combatant: 'Germany', armament: 'Heavy Tank', produced: 140 },
  { year: '1945', combatant: 'Soviet Union', armament: 'Light Tank', produced: 2966 },
  { year: '1945', combatant: 'Soviet Union', armament: 'Medium Tank', produced: 16602 },
  { year: '1945', combatant: 'Soviet Union', armament: 'Heavy Tank', produced: 3100 },
  { year: '1945', combatant: 'US', armament: 'Light Tank', produced: 2801 },
  { year: '1945', combatant: 'US', armament: 'Medium Tank', produced: 8055 },
  { year: '1945', combatant: 'US', armament: 'Heavy Tank', produced: 2162 }
];

const initialValue = {
  showXLabel: true,
  showYLabel: true,
  chartData: data,
  chartId: 'mynexusStackedBarChart',
  axisLabelFontSize: 14,
  axisTickFontFamily: 'sans-serif',
  axisTickFontSize: 10,
  canvasHeight: 450,
  canvasWidth: 940,
  colorScheme: 'category10',
  gridlines: false,
  hideXAxis: false,
  hideXTicks: false,
  hideYAxis: false,
  hideYTicks: false,
  inverse: false,
  legend: false,
  legendFontSize: 12,
  legendMetric: 'label',
  legendWidth: 125,
  marginBottom: 25,
  marginLeft: 25,
  marginRight: 25,
  marginTop: 25,
  responsive: true,
  strokeWidth: 1,
  tooltips: true,
  xLabel: 'Year',
  xTickSize: 2,
  yLabel: 'Production',
  yTickSize: 2,
  barStroke: 'transparent',
  orientation: 'vertical',
  linearTickFormat: 'localestring',
  linearDomain: 'absolute',
  category: 'Light Tank',
  groupBy: 'Year',
  ordinalMetric: 'year',
  seriesMetric: 'combatant',
  maxBarWidth: 75,
  barStrokeWidth: 1
};

interface IOptions {
  label: string;
  value: any;
}

const App = () => {
  const [chartOptions, setChartOptions] = useState<any>(initialValue);
  const [selectedYears, setSelectedYears] = useState<string[]>(['1942', '1943', '1944', '1945']);
  const wrapInControlItem = (component: React.ReactElement) => (
    <div className='control-item'>{component}</div>
  );

  const updateState = (field: any, target: any) => {
    let value = '';
    if (field === 'linearDomain') {
      if (target.value === 'percent') {
        setChartOptions({
          ...chartOptions,
          linearTickFormat: 'percent1d',
          linearDomain: target.value
        });
      } else {
        setChartOptions({
          ...chartOptions,
          linearTickFormat: 'localestring',
          linearDomain: target.value
        });
      }
    }
    else if (field === 'category') {
      value = target.value;
      selectCategory(value);
      return;
    } else if (field === 'groupBy') {
      selectGroupBy(target.value);
      return;
    } else if (target.type === 'checkbox') {
      value = target.checked;
      setChartOptions({
        ...chartOptions,
        [field]: value
      });
    } else {
      value = target.value;
      setChartOptions({
        ...chartOptions,
        [field]: value
      });
    }
  };

  const selectGroupBy = (val: string) => {
    console.log(val);
    if (val === 'Country') {
      setChartOptions({
        ...chartOptions,
        seriesMetric: 'year',
        ordinalMetric: 'combatant',
        xLabel: 'Country',
        groupBy: 'Country'
      });
    } else {
      setChartOptions({
        ...chartOptions,
        seriesMetric: 'combatant',
        ordinalMetric: 'year',
        xLabel: 'Year',
        groupBy: 'Year'
      });
    }
  };

  const selectCategory = (val: string) => {
    setChartOptions({
      ...chartOptions,
      category: val
    });
  };

  const generateStackedBarChartData = () => {
    let filteredData: any;

    if (chartOptions.groupBy === 'Country') {
      filteredData = data.filter((f) => {
        return selectedYears.indexOf(f.year) !== -1 && f.armament === chartOptions.category;
      });
    } else {
      filteredData = data.filter((f) => {
        return selectedYears.indexOf(f.year) !== -1 && f.armament === chartOptions.category;
      });
    }
    setChartOptions({
      ...chartOptions,
      chartData: filteredData
    });
  };

  useEffect(() => {
    generateStackedBarChartData();
  }, [chartOptions.groupBy, chartOptions.category, selectedYears]);

  const updateYear = (year: string) => {
    let updatedSelectedyears = [];
    if (selectedYears.indexOf(year) !== -1) {
      updatedSelectedyears = selectedYears.filter((y) => y !== year);
      setSelectedYears(updatedSelectedyears);
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  const renderCheckBox = (field: any, label: string) => (
    <NexusCheckbox checked={chartOptions[field] as boolean} onClick={(e: any) => updateState(field, e.target)}>
      {label}
    </NexusCheckbox>
  );

  const renderNexusSelect = (field: any, options: any[], label: string) => (
    <>
      {' '}
      <NexusLabel className="select">{label}</NexusLabel>
      <NexusSelect value={chartOptions[field]?.toString()} onInput={(e: any) => updateState(field, e.target)}>
        {renderOptions(options)}
      </NexusSelect>
    </>
  );

  const renderNexusInput = (label: string, field: keyof JSX.NexusStackedBarChart) => (
    <>
      <NexusLabel>{label}</NexusLabel>
      <NexusInput
        id={field}
        value={chartOptions[field]?.toString()}
        onInput={(e: any) => updateState(field, e.target)}
      />
    </>
  );

  const renderSelctWithCustomOptions = (field: keyof JSX.NexusStackedBarChart, options: IOptions[], label: string) => (
    <>
      {' '}
      <NexusLabel className="select">{label}</NexusLabel>
      <NexusSelect value={chartOptions[field]?.toString()} onInput={(e: any) => updateState(field, e.target)}>
        {renderOptionsWithDifferentValue(options)}
      </NexusSelect>
    </>
  );

  const renderOptions = (options: any[]) =>
    options.map((singleOption) => <option value={singleOption}>{singleOption}</option>);

  const renderOptionsWithDifferentValue = (options: IOptions[]) =>
    options.map((singleOption) => <option value={singleOption.value}>{singleOption.label}</option>);

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

  const renderChart = () => (
    <div id="chart-container" className={`nexus-col-xs-4 nexus-col-lg-9 chart-container`}>
      <div className='page-title'>&lt;nexus-stacked-bar-chart&gt;</div>
      <div className='align-row'>
        {wrapInControlItem(renderNexusSelect('category', ['Light Tank', 'Medium Tank', 'Heavy Tank'], 'Category'))}
        {wrapInControlItem(renderNexusSelect('groupBy', ['Year', 'Country'], 'Group By'))}
        <div className='checkbox-container'>
          <span>Production Year(s):</span>
          <NexusCheckbox checked={selectedYears.indexOf('1941') !== -1} onInput={() => updateYear('1941')}>
            1941
          </NexusCheckbox>
          <NexusCheckbox checked={selectedYears.indexOf('1942') !== -1} onInput={() => updateYear('1942')}>
            1942
          </NexusCheckbox>
          <NexusCheckbox checked={selectedYears.indexOf('1943') !== -1} onInput={() => updateYear('1943')}>
            1943
          </NexusCheckbox>
          <NexusCheckbox checked={selectedYears.indexOf('1944') !== -1} onInput={() => updateYear('1944')}>
            1944
          </NexusCheckbox>
          <NexusCheckbox checked={selectedYears.indexOf('1945') !== -1} onInput={() => updateYear('1945')}>
            1945
          </NexusCheckbox>
        </div>
      </div>
      <div className={chartOptions['inverse'] ? 'chart-inverse' : 'chart'}>
        <NexusStackedBarChart
          chart-id="mynexusStackedBarChart"
          linear-metric="produced"
          linearTickFormat={chartOptions.linearTickFormat}
          linearDomain={chartOptions.linearDomain}
          ordinalMetric={chartOptions.ordinalMetric}
          responsive
          series-metric={chartOptions.seriesMetric}
          hideXAxis={chartOptions.hideXAxis}
          hideXTicks={chartOptions.hideXTicks}
          xTickSize={chartOptions.xTickSize}
          xLabel={chartOptions.xLabel}
          hideYAxis={chartOptions.hideYAxis}
          hideYTicks={chartOptions.hideYTicks}
          yTickSize={chartOptions.yTickSize}
          yLabel={chartOptions.yLabel}
          gridlines={chartOptions.gridlines}
          inverse={chartOptions.inverse}
          legend={chartOptions.legend}
          chartData={chartOptions.chartData}
          axisLabelFontSize={chartOptions.axisLabelFontSize}
          axisTickFontFamily={chartOptions.axisTickFontFamily}
          axisTickFontSize={chartOptions.axisTickFontSize}
          colorScheme={chartOptions.colorScheme}
          legendFontSize={chartOptions.legendFontSize}
          orientation={chartOptions.orientation}
          marginBottom={chartOptions.marginBottom}
          marginTop={chartOptions.marginBottom}
          marginLeft={chartOptions.marginLeft}
          marginRight={chartOptions.marginRight}
          barStroke={chartOptions.barStroke}
          barStrokeWidth={chartOptions.barStrokeWidth}
          maxBarWidth={chartOptions.maxBarWidth}
        />
      </div>
    </div>
  );

  return (
    <div id="wrapper" className="nexus-row">
      <div className={`nexus-col-xs-4 nexus-col-lg-3 control-container`}>
        <div className='control-category'>X-axis</div>
        <NexusCheckbox checked={chartOptions.showXLabel as boolean} onClick={(e: any) => showHideXLabel(e)}>
          Show Label
        </NexusCheckbox>
        {wrapInControlItem(renderCheckBox('hideXTicks', 'Hide Tick Values'))}
        {wrapInControlItem(renderCheckBox('hideXAxis', 'Hide Entire X-axis'))}
        {wrapInControlItem(renderNexusSelect('xTickSize', [2, 4, 10, 12, 16], 'Tick Size / Length'))}
        {wrapInControlItem(renderNexusInput('xLabel', 'xLabel'))}
        <div className='control-category'>Y-axis</div>
        <NexusCheckbox checked={chartOptions.showYLabel as boolean} onClick={(e: any) => showHideYLabel(e)}>
          Show Label
        </NexusCheckbox>
        {wrapInControlItem(renderCheckBox('hideYTicks', 'Hide Tick Values'))}
        {wrapInControlItem(renderCheckBox('hideYAxis', 'Hide Entire X-axis'))}
        {wrapInControlItem(renderNexusSelect('yTickSize', [2, 4, 10, 12, 16], 'Tick Size / Length'))}
        {wrapInControlItem(renderNexusInput('yLabel', 'yLabel'))}
        <div className='control-category'>Options</div>
        {wrapInControlItem(renderCheckBox('gridlines', 'Show gridlines'))}
        {wrapInControlItem(renderCheckBox('inverse', 'Inverse'))}
        {wrapInControlItem(renderCheckBox('legend', 'Legend'))}
        {wrapInControlItem(renderNexusSelect('axisLabelFontSize', [9, 12, 14, 16, 20], 'Axis Label Font Size'))}
        {wrapInControlItem(
          renderNexusSelect('axisTickFontFamily', ['sans-serif', 'serif', 'monospace'], 'Axis Label Font Family')
        )}
        {wrapInControlItem(renderNexusSelect('axisTickFontSize', [8, 9, 10, 12], 'Axis Tick Font Size'))}
        {wrapInControlItem(
          renderSelctWithCustomOptions(
            'barStroke',
            [
              { label: 'Transparent', value: 'transparent' },
              { label: 'Black', value: '#000000' },
              { label: 'White', value: '#fff' },
              { label: 'Gray', value: '#999999' }
            ],
            'Bar Stroke'
          )
        )}
        {wrapInControlItem(renderNexusSelect('barStrokeWidth', [0, 1, 2, 5], 'Bar Stroke Width'))}
        {wrapInControlItem(renderNexusSelect('maxBarWidth', [5, 25, 50, 75], 'Bar Width, Max'))}
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
        {wrapInControlItem(renderNexusSelect('orientation', ['vertical', 'horizontal'], 'Orientation'))}
        {wrapInControlItem(
          renderSelctWithCustomOptions(
            'marginBottom',
            [
              { label: '25px', value: 25 },
              { label: '50px', value: 50 },
              { label: '75px', value: 75 }
            ],
            'Margin bottom'
          )
        )}
        {wrapInControlItem(
          renderSelctWithCustomOptions(
            'marginTop',
            [
              { label: '25px', value: 25 },
              { label: '50px', value: 50 },
              { label: '75px', value: 75 }
            ],
            'Margin top'
          )
        )}
        {wrapInControlItem(
          renderSelctWithCustomOptions(
            'marginLeft',
            [
              { label: '25px', value: 25 },
              { label: '50px', value: 50 },
              { label: '75px', value: 75 }
            ],
            'Margin left'
          )
        )}
        {wrapInControlItem(
          renderSelctWithCustomOptions(
            'marginRight',
            [
              { label: '25px', value: 25 },
              { label: '50px', value: 50 },
              { label: '75px', value: 75 }
            ],
            'Margin right'
          )
        )}
        {wrapInControlItem(
          renderSelctWithCustomOptions(
            'linearDomain',
            [
              { label: 'absolute', value: 'absolute' },
              { label: 'percentages', value: 'percent' }
            ],
            'Values'
          )
        )}
      </div>
      {renderChart()}
    </div>
  );
};

export default App;