/* eslint-disable max-lines */
/**
 * src/js/shared.js
 * Common Javascript for all charts
 */

// **************************************
// vars for all *.index.html
// **************************************
let gridlines;
let inverse;
let showLegend;
let showPieLegend;
let vertices;

gridlines = false;
inverse = false;
showLegend = false;
showPieLegend = true;
vertices = true;

// **************************************
// shared functions
// **************************************
const getChartEl = (id) => document.querySelector(id);

const changeXLabel = (selector, value) => {
  getChartEl(selector).xLabel = value;
  document.querySelector('#xLabelInput').value = '';
};

const changeYLabel = (selector, value) => {
  getChartEl(selector).yLabel = value;
  document.querySelector('#yLabelInput').value = '';
};

const randomizer = () => Math.floor(Math.random() * 500) - 250;

const selectArcStroke = (selector) => {
  const val = document.querySelector('#arcStroke').value;
  getChartEl(selector).stroke = val;
};

const selectAxisLabelFontSize = (selector) => {
  const val = document.querySelector('#axisLabelFontSize').value;
  getChartEl(selector).axisLabelFontSize = val;
};

const selectAxisTickFontSize = (selector) => {
  const val = document.querySelector('#axisTickFontSize').value;
  getChartEl(selector).axisTickFontSize = val;
};

const selectAxisTickFontFamily = (selector) => {
  const val = document.querySelector('#axisTickFontFamily').value;
  getChartEl(selector).axisTickFontFamily = val;
};

const selectBarStroke = (selector) => {
  const val = document.querySelector('#barStroke').value;
  getChartEl(selector).barStroke = val;
};

const selectBarStrokeWidth = (selector) => {
  const val = document.querySelector('#barStrokeWidth').value;
  getChartEl(selector).barStrokeWidth = val;
};

const selectColorScheme = (selector) => {
  const val = document.querySelector('#colorScheme').value;
  getChartEl(selector).colorScheme = val;
};

const selectInnerRadius = (selector) => {
  const val = document.querySelector('#innerRadius').value;
  getChartEl(selector).innerRadius = val;
};

const selectInterpolation = (selector) => {
  const val = document.querySelector('#interpolation').value;
  getChartEl(selector).interpolation = val;
};

const selectLegendFontSize = (selector) => {
  const val = document.querySelector('#legendFontSize').value;
  getChartEl(selector).legendFontSize = val;
};

const selectLinearDomain = (selector) => {
  const val = document.querySelector('#linearDomain').value;
  const el = getChartEl(selector);
  if (val === 'percent') {
    el.linearTickFormat = 'percent1d';
  }
  else {
    el.linearTickFormat = 'localestring';
  }
  getChartEl(selector).linearDomain = val;
};

const selectLineStroke = (selector) => {
  const val = document.querySelector('#lineStroke').value;
  getChartEl(selector).strokeWidth = val;
};

const selectMargin = (marginAttribute, selector) => {
  const val = document.querySelector(`#${marginAttribute}`).value;
  const el = getChartEl(selector);
  el[marginAttribute] = val;
};

const selectMaxBarWidth = (selector) => {
  const val = document.querySelector('#maxBarWidth').value;
  getChartEl(selector).maxBarWidth = val;
};

const selectXTickSize = (selector) => {
  const val = document.querySelector('#xTickSize').value;
  getChartEl(selector).xTickSize = val;
};

const selectYTickSize = (selector) => {
  const val = document.querySelector('#yTickSize').value;
  getChartEl(selector).yTickSize = val;
};

const toggleGridlines = (selector) => {
  gridlines = !gridlines;
  getChartEl(selector).gridlines = gridlines;
};

const toggleInverse = (selector) => {
  inverse = !inverse;
  getChartEl(selector).inverse = inverse;

  if (inverse) {
    document.querySelector('div.chart').classList.add('inverse');
  }
  else {
    document.querySelector('div.chart').classList.remove('inverse');
  }
};

const toggleLegend = (selector) => {
  if (selector === 'nexus-pie-chart') {
    showPieLegend = !showPieLegend;
    getChartEl(selector).legend = showPieLegend;

    return;
  }
  showLegend = !showLegend;
  getChartEl(selector).legend = showLegend;
};

const toggleOrientation = (selector) => {
  const val = document.querySelector('#orientation').value || 'vertical';
  const el = getChartEl(selector);
  let xLabel;
  let yLabel;

  // horizontal orientation
  if (val === 'horizontal') {
    if (selector === 'nexus-stacked-bar-chart') {
      xLabel = 'Production';
      yLabel = 'Year';
    }
    else {
      xLabel = 'Price';
      yLabel = 'Ticker Symbol';
    }
  }
  else if (selector === 'nexus-stacked-bar-chart') {
    xLabel = 'Year';
    yLabel = 'Production';
  }
  else {
    xLabel = 'Ticker Symbol';
    yLabel = 'Price';
  }

  el.orientation = val;
  el.xLabel = xLabel;
  el.yLabel = yLabel;
};

const toggleVertices = (selector) => {
  vertices = !vertices;
  getChartEl(selector).vertices = vertices;
};

// end of shared.js

/**
 * src/js/xAxis.js
 * controlling X-axis attributes
 */
let hideXAxis;
let showXLabel;
let showXTicks;

hideXAxis = false;
showXLabel = true;
showXTicks = true;

const toggleShowHideXAxis = (selector) => {
  hideXAxis = !hideXAxis;
  const el = getChartEl(selector);

  if (hideXAxis) {
    el.xLabel = '';
    el.hideXAxis = true;
    el.hideXTicks = true;

    showXLabel = false;
    showXTicks = false;

    document.querySelector('#xLabel').checked = false;
    document.querySelector('#xLabel').disabled = true;
    document.querySelector('#xTicks').checked = false;
    document.querySelector('#xTicks').disabled = true;
  }
  else {
    el.xLabel = 'Date';
    el.hideXAxis = false;
    el.hideXTicks = false;

    showXLabel = true;
    showXTicks = true;

    document.querySelector('#xLabel').checked = true;
    document.querySelector('#xLabel').disabled = false;
    document.querySelector('#xTicks').checked = true;
    document.querySelector('#xTicks').disabled = false;
  }
};

const toggleShowHideXLabel = (selector) => {
  showXLabel = !showXLabel;

  let label;
  label = '';
  switch (selector) {
  default:
    label = 'Date';
    break;
  }
  getChartEl(selector).xLabel = showXLabel ? label : '';
};

const toggleShowHideXTicks = (selector) => {
  showXTicks = !showXTicks;
  getChartEl(selector).hideXTicks = !showXTicks;
};

// end of xAxis.js

/**
 * src/js/yAxis.js
 * Controlling Y-axis attributes
 */
let hideYAxis;
let showYLabel;
let showYTicks;

hideYAxis = false;
showYLabel = true;
showYTicks = true;

const toggleShowHideYAxis = (selector) => {
  hideYAxis = !hideYAxis;
  const el = getChartEl(selector);

  if (hideYAxis) {
    el.yLabel = '';
    el.hideYAxis = true;
    el.hideYTicks = true;

    showYLabel = false;
    showYTicks = false;

    document.querySelector('#yLabel').checked = false;
    document.querySelector('#yLabel').disabled = true;
    document.querySelector('#yTicks').checked = false;
    document.querySelector('#yTicks').disabled = true;
  }
  else {
    el.yLabel = 'Score';
    el.hideYAxis = false;
    el.hideYTicks = false;

    showYLabel = true;
    showYTicks = true;

    document.querySelector('#yLabel').checked = true;
    document.querySelector('#yLabel').disabled = false;
    document.querySelector('#yTicks').checked = true;
    document.querySelector('#yTicks').disabled = false;
  }
};

const toggleShowHideYLabel = (selector) => {
  showYLabel = !showYLabel;
  getChartEl(selector).yLabel = showYLabel ? 'Score' : '';
};

const toggleShowHideYTicks = (selector) => {
  showYTicks = !showYTicks;
  getChartEl(selector).hideYTicks = !showYTicks;
};

// end of yAxis.js

/**
 * src/js/_stackedBarChart.js
 * <nexus-stacked-bar-chart> Javascript
 */

/**
 * vars
 */
let currentTankCategory;
let currentXLabel;
const currentYLabel = 'Production';
const groupByConfiguration = 'year';
let linearDomain;
let selectedYears;

currentTankCategory = 'Light Tank';
currentXLabel = 'Year';
linearDomain = 'absolute';
selectedYears = ['1942', '1943', '1944'];

const tankProductionData = [
  { year: '1941',
    combatant: 'Germany',
    armament: 'Light Tank',
    produced: 943 },
  { year: '1941',
    combatant: 'Germany',
    armament: 'Medium Tank',
    produced: 2680 },
  { year: '1941',
    combatant: 'Germany',
    armament: 'Heavy Tank',
    produced: 0 },
  { year: '1941',
    combatant: 'Soviet Union',
    armament: 'Light Tank',
    produced: 2321 },
  { year: '1941',
    combatant: 'Soviet Union',
    armament: 'Medium Tank',
    produced: 3016 },
  { year: '1941',
    combatant: 'Soviet Union',
    armament: 'Heavy Tank',
    produced: 1353 },
  { year: '1941',
    combatant: 'US',
    armament: 'Light Tank',
    produced: 2591 },
  { year: '1941',
    combatant: 'US',
    armament: 'Medium Tank',
    produced: 1430 },
  { year: '1941',
    combatant: 'US',
    armament: 'Heavy Tank',
    produced: 0 },
  { year: '1942',
    combatant: 'Germany',
    armament: 'Light Tank',
    produced: 1500 },
  { year: '1942',
    combatant: 'Germany',
    armament: 'Medium Tank',
    produced: 3952 },
  { year: '1942',
    combatant: 'Germany',
    armament: 'Heavy Tank',
    produced: 78 },
  { year: '1942',
    combatant: 'Soviet Union',
    armament: 'Light Tank',
    produced: 9580 },
  { year: '1942',
    combatant: 'Soviet Union',
    armament: 'Medium Tank',
    produced: 13473 },
  { year: '1942',
    combatant: 'Soviet Union',
    armament: 'Heavy Tank',
    produced: 2635 },
  { year: '1942',
    combatant: 'US',
    armament: 'Light Tank',
    produced: 10674 },
  { year: '1942',
    combatant: 'US',
    armament: 'Medium Tank',
    produced: 15720 },
  { year: '1942',
    combatant: 'US',
    armament: 'Heavy Tank',
    produced: 0 },
  { year: '1943',
    combatant: 'Germany',
    armament: 'Light Tank',
    produced: 1811 },
  { year: '1943',
    combatant: 'Germany',
    armament: 'Medium Tank',
    produced: 9050 },
  { year: '1943',
    combatant: 'Germany',
    armament: 'Heavy Tank',
    produced: 740 },
  { year: '1943',
    combatant: 'Soviet Union',
    armament: 'Light Tank',
    produced: 5512 },
  { year: '1943',
    combatant: 'Soviet Union',
    armament: 'Medium Tank',
    produced: 19808 },
  { year: '1943',
    combatant: 'Soviet Union',
    armament: 'Heavy Tank',
    produced: 1422 },
  { year: '1943',
    combatant: 'US',
    armament: 'Light Tank',
    produced: 9024 },
  { year: '1943',
    combatant: 'US',
    armament: 'Medium Tank',
    produced: 28164 },
  { year: '1943',
    combatant: 'US',
    armament: 'Heavy Tank',
    produced: 0 },
  { year: '1944',
    combatant: 'Germany',
    armament: 'Light Tank',
    produced: 2507 },
  { year: '1944',
    combatant: 'Germany',
    armament: 'Medium Tank',
    produced: 15380 },
  { year: '1944',
    combatant: 'Germany',
    armament: 'Heavy Tank',
    produced: 1069 },
  { year: '1944',
    combatant: 'Soviet Union',
    armament: 'Light Tank',
    produced: 7155 },
  { year: '1944',
    combatant: 'Soviet Union',
    armament: 'Medium Tank',
    produced: 22618 },
  { year: '1944',
    combatant: 'Soviet Union',
    armament: 'Heavy Tank',
    produced: 4764 },
  { year: '1944',
    combatant: 'US',
    armament: 'Light Tank',
    produced: 5738 },
  { year: '1944',
    combatant: 'US',
    armament: 'Medium Tank',
    produced: 15489 },
  { year: '1944',
    combatant: 'US',
    armament: 'Heavy Tank',
    produced: 40 },
  { year: '1945',
    combatant: 'Germany',
    armament: 'Light Tank',
    produced: 1335 },
  { year: '1945',
    combatant: 'Germany',
    armament: 'Medium Tank',
    produced: 2931 },
  { year: '1945',
    combatant: 'Germany',
    armament: 'Heavy Tank',
    produced: 140 },
  { year: '1945',
    combatant: 'Soviet Union',
    armament: 'Light Tank',
    produced: 2966 },
  { year: '1945',
    combatant: 'Soviet Union',
    armament: 'Medium Tank',
    produced: 16602 },
  { year: '1945',
    combatant: 'Soviet Union',
    armament: 'Heavy Tank',
    produced: 3100 },
  { year: '1945',
    combatant: 'US',
    armament: 'Light Tank',
    produced: 2801 },
  { year: '1945',
    combatant: 'US',
    armament: 'Medium Tank',
    produced: 8055 },
  { year: '1945',
    combatant: 'US',
    armament: 'Heavy Tank',
    produced: 2162 }
];

/**
 * functions
 */
const generateStackedBarChartData = () => {
  let filteredData;

  if (groupByConfiguration === 'country') {
    filteredData = tankProductionData.filter((fData) => fData.armament === currentTankCategory);
  }
  else {
    filteredData = tankProductionData.filter((fData) => selectedYears.indexOf(fData.year) >= 0 && fData.armament === currentTankCategory);
  }
  getChartEl('nexus-stacked-bar-chart').chartData = filteredData;
};

const selectGroupBy = () => {
  const val = document.querySelector('#groupBy').value || 'year';
  const el = getChartEl('nexus-stacked-bar-chart');
  if (val === 'country') {
    el.ordinalMetric = 'combatant';
    el.seriesMetric = 'year';
    currentXLabel = 'Country';
    el.xLabel = 'Country';
  }
  else {
    el.ordinalMetric = 'year';
    el.seriesMetric = 'combatant';
    currentXLabel = 'Year';
    el.xLabel = 'Year';
  }
};

const selectTankCategory = () => {
  const val = document.querySelector('#tankCategory').value || 'Light Tank';
  currentTankCategory = val;
  generateStackedBarChartData();
};

const togglePercent = () => {
  let tickformat;
  const el = getChartEl('nexus-stacked-bar-chart');

  if (linearDomain === 'absolute') {
    linearDomain = 'percent';
    tickformat = 'percent';
  }
  else {
    linearDomain = 'absolute';
    tickformat = 'localestring';
  }
  el.linearDomain = linearDomain;
  el.linearTickFormat = tickformat;
};

const yearCheck = (year) => {
  const el = document.querySelector(`#year${year}`);
  if (el) {
    if (el.checked) {
      selectedYears.push(year);
    }
    else {
      selectedYears = selectedYears.filter((fdata) => fdata !== year);
    }

    generateStackedBarChartData();
  }
};

/**
 * baseline WW2 tank production data
 * source: https://i1.wp.com/mathscinotes.com/wp-content/uploads/2017/09/ProductionTable.png
 */


document.addEventListener('nexus-stacked-bar-chart-loaded', (evt) => {
  generateStackedBarChartData();
});

const addListeners = () => {
  document.getElementById('xLabelInput').addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
      changeXLabel('nexus-stacked-bar-chart', evt.target.value);
    }
  });

  document.getElementById('yLabelInput').addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
      changeYLabel('nexus-stacked-bar-chart', evt.target.value);
    }
  });
};

window.onload = () => {
  addListeners();
  generateStackedBarChartData();
};
