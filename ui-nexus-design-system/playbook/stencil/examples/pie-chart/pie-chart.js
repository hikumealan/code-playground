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

const musicSalesData = [
  { artist: 'The Beatles',
    units: 183 },
  { artist: 'Garth Brooks',
    units: 148 },
  { artist: 'Elvis Presley',
    units: 146.5 },
  { artist: 'The Eagles',
    units: 120 },
  { artist: 'Led Zeppelin',
    units: 111.5 },
  { artist: 'Billy Joel',
    units: 84.5 },
  { artist: 'Michael Jackson',
    units: 84 },
  { artist: 'Elton John',
    units: 78.5 },
  { artist: 'Pink Floyd',
    units: 75 },
  { artist: 'AC/DC',
    units: 72 },
  { artist: 'George Strait',
    units: 69 },
  { artist: 'Barbara Streisand',
    units: 68.5 },
  { artist: 'The Rolling Stones',
    units: 66.5 },
  { artist: 'Aerosmith',
    units: 66.5 },
  { artist: 'Bruce Springsteen',
    units: 65.5 }
];

const generatePieChartData = (numWedges) => musicSalesData.slice(0, numWedges);

const selectTopN = (num) => {
  getChartEl('nexus-pie-chart').chartData = generatePieChartData(num);
};

document.addEventListener('nexus-pie-chart-loaded', (evt) => {
  document.querySelector('nexus-pie-chart').chartData = generatePieChartData(5);
});

window.onload = () => {
  selectTopN(5);
};
