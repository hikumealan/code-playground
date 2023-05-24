import { stackedBarChartData } from '../../constants';
import html from '!!raw-loader!../../examples/stacked-bar-chart/01_stackedBarChart.html';

const DefaultBarChart = ({
  axisLabelFontSize,
  axisTickFontFamily,
  axisTickFontSize,
  barStroke,
  barStrokeWidth,
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
  legendWidth,
  linearDomain,
  linearMetric,
  linearTickFormat,
  maxBarWidth,
  ordinalMetric,
  orientation,
  seriesMetric,
  tooltips,
  xLabel,
  xTickSize,
  yLabel,
  yTickSize,
  canvasHeight,
  canvasWidth,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop
}) => {
  const component = document.createElement('nexus-stacked-bar-chart') as any;
  component.chartData = stackedBarChartData;
  component.innerHTML = html;

  component.setAttribute('axis-label-font-size', axisLabelFontSize);
  component.setAttribute('axis-tick-font-family', axisTickFontFamily);
  component.setAttribute('axis-tick-font-size', axisTickFontSize);
  component.setAttribute('bar-stroke', barStroke);
  component.setAttribute('bar-stroke-width', barStrokeWidth);
  component.setAttribute('chat-id', chartId);
  component.setAttribute('color-scheme', colorScheme);
  component.setAttribute('gridlines', gridlines);
  component.setAttribute('hide-x-axis', hideXAxis);
  component.setAttribute('hide-x-ticks', hideXTicks);
  component.setAttribute('hide-y-axis', hideYAxis);
  component.setAttribute('hide-y-ticks', hideYTicks);
  component.setAttribute('inverse', inverse);
  component.setAttribute('legend', legend);
  component.setAttribute('legend-font-size', legendFontSize);
  component.setAttribute('legend-width', legendWidth);
  component.setAttribute('linear-domain', linearDomain);
  component.setAttribute('linear-metric', linearMetric);
  component.setAttribute('linear-tick-format', linearTickFormat);
  component.setAttribute('max-bar-width', maxBarWidth);
  component.setAttribute('ordinal-metric', ordinalMetric);
  component.setAttribute('orientation', orientation);
  component.setAttribute('responsive', true);
  component.setAttribute('series-metric', seriesMetric);
  component.setAttribute('tooltips', tooltips);
  component.setAttribute('x-label', xLabel);
  component.setAttribute('x-tick-size', xTickSize);
  component.setAttribute('y-label', yLabel);
  component.setAttribute('y-tick-size', yTickSize);
  component.setAttribute('canvas-height', canvasHeight);
  component.setAttribute('canvas-width', canvasWidth);
  component.setAttribute('margin-bottom', marginBottom);
  component.setAttribute('margin-left', marginLeft);
  component.setAttribute('margin-right', marginRight);
  component.setAttribute('margin-top', marginTop);

  return component;
};

export default DefaultBarChart;
