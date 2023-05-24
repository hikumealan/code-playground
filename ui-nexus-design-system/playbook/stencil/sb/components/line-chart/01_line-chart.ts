import { lineChartData } from '../../constants';
import { dt } from '../../constants';
import { msd } from '../../constants';
import html from '!!raw-loader!../../examples/line-chart/01_line-chart.html';
const data = lineChartData;

const LineChart = ({
  axisLabelFontSize,
  axisTickFontFamily,
  axisTickFontSize,
  chartData,
  chartId,
  canvasHeight,
  canvasWidth,
  colorScheme,
  gridlines,
  hideXAxis,
  hideXTicks,
  hideYAxis,
  hideYTicks,
  interpolation,
  inverse,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  legend,
  legendFontSize,
  legendMetric,
  legendWidth,
  responsive,
  strokeWidth,
  tooltips,
  vertices,
  xLabel,
  xMetric,
  xTickFormat,
  xTickSize,
  yLabel,
  yMetric,
  yTickFormat,
  yTickSize
}) => {
  const component = document.createElement('nexus-line-chart') as any;
  component.chartData = data;
  component.innerHTML = html;

  component.setAttribute('chart-id', 'nexus-line-chart');
  component.setAttribute('axis-label-font-size', axisLabelFontSize);
  component.setAttribute('axis-tick-font-family', axisTickFontFamily);
  component.setAttribute('axis-tick-font-size', axisTickFontSize);
  component.setAttribute('chart-data', chartData);
  component.setAttribute('chart-id', chartId);
  component.setAttribute('canvas-height', canvasHeight);
  component.setAttribute('canvas-width', canvasWidth);
  component.setAttribute('color-scheme', colorScheme);
  component.setAttribute('gridlines', gridlines);
  component.setAttribute('hide-x-axis', hideXAxis);
  component.setAttribute('hide-x-ticks', hideXTicks);
  component.setAttribute('hide-y-axis', hideYAxis);
  component.setAttribute('hide-y-ticks', hideYTicks);
  component.setAttribute('interpolation', interpolation);
  component.setAttribute('inverse', inverse);
  component.setAttribute('margin-bottom', marginBottom);
  component.setAttribute('margin-left', marginLeft);
  component.setAttribute('margin-right', marginRight);
  component.setAttribute('margin-top', marginTop);
  component.setAttribute('legend', legend);
  component.setAttribute('legend-font-size', legendFontSize);
  component.setAttribute('legend-metric', legendMetric);
  component.setAttribute('legend-width', legendWidth);
  component.setAttribute('stroke-width', strokeWidth);
  component.setAttribute('tooltips', tooltips);
  component.setAttribute('vertices', vertices);
  component.setAttribute('x-label', xLabel);
  component.setAttribute('x-metric', xMetric);
  component.setAttribute('x-tick-format', xTickFormat);
  component.setAttribute('x-tick-size', xTickSize);
  component.setAttribute('y-label', yLabel);
  component.setAttribute('y-metric', yMetric);
  component.setAttribute('y-tick-format', yTickFormat);
  component.setAttribute('y-tick-size', yTickSize);
  component.setAttribute('responsive', 'true');

  return component;
};

export default LineChart;
