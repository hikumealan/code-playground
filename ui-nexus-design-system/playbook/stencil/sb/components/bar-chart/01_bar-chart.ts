import { barChartData } from '../../constants';
import html from '!!raw-loader!../../examples/bar-chart/01_bar-chart.html';
const data = barChartData;

const DefaultBarChart = ({
  axisLabelFontSize,
  axisTickFontFamily,
  axisTickFontSize,
  barStroke,
  barStrokeWidth,
  canvasHeight,
  canvasWidth,
  chartData,
  chartId,
  colorScheme,
  gridlines,
  hideXAxis,
  hideXTicks,
  hideYAxis,
  hideYTicks,
  inverse,
  legend,
  legendFontSize,
  legendMetric,
  legendWidth,
  linearMetric,
  linearTickFormat,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxBarWidth,
  ordinalMetric,
  orientation,
  responsive,
  tooltips,
  xLabel,
  xTickSize,
  yLabel,
  yTickSize
}) => {
  const component = document.createElement('nexus-bar-chart') as any;
  component.chartData = data;
  component.innerHTML = html;

  component.setAttribute('axis-label-font-size', axisLabelFontSize);
  component.setAttribute('axis-tick-font-family', axisTickFontFamily);
  component.setAttribute('axis-tick-font-size', axisTickFontSize);
  component.setAttribute('bar-stroke', barStroke);
  component.setAttribute('bar-stroke-width', barStrokeWidth);
  component.setAttribute('canvas-height', canvasHeight);
  component.setAttribute('canvas-width', canvasWidth);
  component.setAttribute('chart-data', data);
  component.setAttribute('chart-id', chartId);
  component.setAttribute('color-scheme', colorScheme);
  component.setAttribute('gridlines', gridlines);
  component.setAttribute('hide-x-axis', hideXAxis);
  component.setAttribute('hide-x-ticks', hideXTicks);
  component.setAttribute('hide-Y-axis', hideYAxis);
  component.setAttribute('hide-y-ticks', hideYTicks);
  component.setAttribute('inverse', inverse);
  component.setAttribute('legend', legend);
  component.setAttribute('legend-font-size', legendFontSize);
  component.setAttribute('legend-metric', legendMetric);
  component.setAttribute('legend-width', legendWidth);
  component.setAttribute('linear-metric', linearMetric);
  component.setAttribute('linear-tick-format', linearTickFormat);
  component.setAttribute('margin-bottom', marginBottom);
  component.setAttribute('margin-left', marginLeft);
  component.setAttribute('margin-right', marginRight);
  component.setAttribute('margin-top', marginTop);
  component.setAttribute('max-bar-width', maxBarWidth);
  component.setAttribute('orientation', orientation);
  component.setAttribute('responsive', responsive);
  component.setAttribute('tooltips', tooltips);
  component.setAttribute('x-label', xLabel);
  component.setAttribute('x-tick-size', xTickSize);
  component.setAttribute('y-label', yLabel);
  component.setAttribute('y-tick-size', yTickSize);
  component.setAttribute('ordinal-metric', ordinalMetric);
  component.setAttribute('responsive', 'true');

  return component;
};

export default DefaultBarChart;
