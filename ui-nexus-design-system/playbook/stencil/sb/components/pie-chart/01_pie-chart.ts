import { pieChartData } from '../../constants';
import html from '!!raw-loader!../../examples/pie-chart/01_pie-chart.html';
const data = pieChartData;

const DefaultPieChart = ({
  chartData,
  chartId,
  colorScheme,
  innerRadius,
  inverse,
  legend,
  legendFontSize,
  legendMetric,
  legendWidth,
  responsive,
  stroke,
  strokeWidth,
  tooltips,
  valueFormat,
  valueMetric,
  canvasWidth,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  canvasHeight
}) => {
  const section = document.createElement('section') as any;
  section.innerHTML = html;
  const component = section.firstElementChild;
  component.chartData = data;

  component.setAttribute('chart-id', 'nexus-pie-chart');
  component.setAttribute('chart-data', chartData);
  component.setAttribute('chart-id', chartId);
  component.setAttribute('color-scheme', colorScheme);
  component.setAttribute('inner-radius', innerRadius);
  component.setAttribute('inverse', inverse);
  component.setAttribute('legend', legend);
  component.setAttribute('legend-font-size', legendFontSize);
  component.setAttribute('legend-metric', legendMetric);
  component.setAttribute('legend-width', legendWidth);
  component.setAttribute('responsive', 'true');
  component.setAttribute('stroke', stroke);
  component.setAttribute('stroke-width', strokeWidth);
  component.setAttribute('tooltips', tooltips);
  component.setAttribute('value-format', valueFormat);
  component.setAttribute('value-metric', valueMetric);
  component.setAttribute('canvas-width', canvasWidth);
  component.setAttribute('margin-bottom', marginBottom);
  component.setAttribute('margin-left', marginLeft);
  component.setAttribute('margin-right', marginRight);
  component.setAttribute('margin-top', marginTop);
  component.setAttribute('canvas-height', canvasHeight);
  
  return section;
};

export default DefaultPieChart;
