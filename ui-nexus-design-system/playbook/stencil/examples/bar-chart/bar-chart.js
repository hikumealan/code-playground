/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
/* eslint-disable init-declarations */
/**
 * src/js/shared.js
 * Common Javascript for all charts
 */

// **************************************
// vars for all *.index.html
// **************************************
let gridlines = false;
let inverse = false;
let showLegend = false;
let showPieLegend = true;
let vertices = true;

// **************************************
// shared functions
// **************************************
function changeXLabel(selector, value) {
  getChartEl(selector).xLabel = value;
  document.querySelector('#xLabelInput').value = '';
}

function changeYLabel(selector, value) {
  getChartEl(selector).yLabel = value;
  document.querySelector('#yLabelInput').value = '';
}

function getChartEl(id) {
  return document.querySelector(id);
}

function randomizer() {
  return Math.floor(Math.random() * 500) - 250;
}

function selectArcStroke(selector) {
  const val = document.querySelector('#arcStroke').value;
  getChartEl(selector).stroke = val;
}

function selectAxisLabelFontSize(selector) {
  const val = document.querySelector('#axisLabelFontSize').value;
  getChartEl(selector).axisLabelFontSize = val;
}

function selectAxisTickFontSize(selector) {
  const val = document.querySelector('#axisTickFontSize').value;
  getChartEl(selector).axisTickFontSize = val;
}

function selectAxisTickFontFamily(selector) {
  const val = document.querySelector('#axisTickFontFamily').value;
  getChartEl(selector).axisTickFontFamily = val;
}

function selectBarStroke(selector) {
  const val = document.querySelector('#barStroke').value;
  getChartEl(selector).barStroke = val;
}

function selectBarStrokeWidth(selector) {
  const val = document.querySelector('#barStrokeWidth').value;
  getChartEl(selector).barStrokeWidth = val;
}

function selectColorScheme(selector) {
  const val = document.querySelector('#colorScheme').value;
  getChartEl(selector).colorScheme = val;
}

function selectInnerRadius(selector) {
  const val = document.querySelector('#innerRadius').value;
  getChartEl(selector).innerRadius = val;
}

function selectInterpolation(selector) {
  const val = document.querySelector('#interpolation').value;
  getChartEl(selector).interpolation = val;
}

function selectLegendFontSize(selector) {
  const val = document.querySelector('#legendFontSize').value;
  getChartEl(selector).legendFontSize = val;
}

function selectLinearDomain(selector) {
  const val = document.querySelector('#linearDomain').value;
  const el = getChartEl(selector);
  if (val === 'percent') {
    el.linearTickFormat = 'percent1d';
  }
  else {
    el.linearTickFormat = 'localestring';
  }
  getChartEl(selector).linearDomain = val;
}

function selectLineStroke(selector) {
  const val = document.querySelector('#lineStroke').value;
  getChartEl(selector).strokeWidth = val;
}

function selectMargin(marginAttribute, selector) {
  const val = document.querySelector(`#${marginAttribute}`).value;
  const el = getChartEl(selector);
  el[marginAttribute] = val;
}

function selectMaxBarWidth(selector) {
  const val = document.querySelector('#maxBarWidth').value;
  getChartEl(selector).maxBarWidth = val;
}

function selectXTickSize(selector) {
  const val = document.querySelector('#xTickSize').value;
  getChartEl(selector).xTickSize = val;
}

function selectYTickSize(selector) {
  const val = document.querySelector('#yTickSize').value;
  getChartEl(selector).yTickSize = val;
}

function toggleGridlines(selector) {
  gridlines = !gridlines;
  getChartEl(selector).gridlines = gridlines;
}

function toggleInverse(selector) {
  inverse = !inverse;
  getChartEl(selector).inverse = inverse;

  if (inverse) {
    document.querySelector('div.chart').classList.add('inverse');
  }
  else {
    document.querySelector('div.chart').classList.remove('inverse');
  }
}

function toggleLegend(selector) {
  if (selector === 'nexus-pie-chart') {
    showPieLegend = !showPieLegend;
    getChartEl(selector).legend = showPieLegend;

    return;
  }
  showLegend = !showLegend;
  getChartEl(selector).legend = showLegend;
}

function toggleOrientation(selector) {
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
}

function toggleVertices(selector) {
  vertices = !vertices;
  getChartEl(selector).vertices = vertices;
}
// end of shared.js

/**
 * src/js/xAxis.js
 * controlling X-axis attributes
 */
let hideXAxis = false;
let showXLabel = true;
let showXTicks = true;

function toggleShowHideXAxis(selector) {
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
}

function toggleShowHideXLabel(selector) {
  showXLabel = !showXLabel;

  let label = '';
  switch (selector) {
  default:
    label = 'Date';
    break;
  }
  getChartEl(selector).xLabel = showXLabel ? label : '';
}

function toggleShowHideXTicks(selector) {
  showXTicks = !showXTicks;
  getChartEl(selector).hideXTicks = !showXTicks;
}

// end of xAxis.js

/**
 * src/js/yAxis.js
 * Controlling Y-axis attributes
 */
let hideYAxis = false;
let showYLabel = true;
let showYTicks = true;

function toggleShowHideYAxis(selector) {
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
}

function toggleShowHideYLabel(selector) {
  showYLabel = !showYLabel;
  getChartEl(selector).yLabel = showYLabel ? 'Score' : '';
}

function toggleShowHideYTicks(selector) {
  showYTicks = !showYTicks;
  getChartEl(selector).hideYTicks = !showYTicks;
}

// end of yAxis.js

/**
 * src/js/_barChart.js
 * <nexus-bar-chart> helper
 */
function generateBarChartData(numBars) {
  const data = [
    { ticker: 'KO',
      name: 'Coca-Cola',
      value: 52.36 },
    { ticker: 'BZH',
      name: 'Beazer Homes',
      value: 11.11 },
    { ticker: 'ADM',
      name: 'Arch-Dan-Mid',
      value: 37.17 },
    { ticker: 'ABCB',
      name: 'Ameris Bancorp',
      value: 36.44 },
    { ticker: 'ORCL',
      name: 'Oracle',
      value: 53.75 },
    { ticker: 'MIL',
      name: 'MILD',
      value: 37.17 },
    { ticker: 'HCL',
      name: 'HCL',
      value: 36.44 },
    { ticker: 'MFL',
      name: 'Madras',
      value: 53.75 },
    { ticker: 'PLNT',
      name: 'Planet Fitness',
      value: 77.27 }
  ];

  data.sort((aItem, bItem) => aItem.ticker > bItem.ticker ? 1 : -1);

  return data.slice(0, numBars);
}

function selectNumBars(numBars) {
  getChartEl('nexus-bar-chart').chartData = generateBarChartData(numBars);
}
// end of _barChart.js

document.addEventListener('nexusBarChartLoaded', () => {
  selectNumBars(9);
});

function addListeners() {
  document.getElementById('xLabelInput').addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
      changeXLabel('nexus-bar-chart', evt.target.value);
    }
  });

  document.getElementById('yLabelInput').addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
      changeYLabel('nexus-bar-chart', evt.target.value);
    }
  });
}

window.onload = function () {
  addListeners();
};
