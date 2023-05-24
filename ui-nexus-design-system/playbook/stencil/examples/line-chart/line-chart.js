/* eslint-disable id-length */
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
  const val = document.querySelector(`#marginAttribute`).value;
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


/**
 * src/js/lineChart.js
 * <nexus-line-chart> helper functions
 */
const generateLineChartData = (numLines) => {
  const dt = new Date(1546318800000);
  const msd = 86400000;

  const data = [
    {
      label: 'User 1',
      name: 'Mark',
      data: [
        { x: dt.getTime() + msd * 10,
          y: 71 },
        { x: dt.getTime() + msd * 20,
          y: 251 },
        { x: dt.getTime() + msd * 30,
          y: 357 },
        { x: dt.getTime() + msd * 40,
          y: 414 },
        { x: dt.getTime() + msd * 50,
          y: 270 },
        { x: dt.getTime() + msd * 60,
          y: 33 }
      ]
    },
    {
      label: 'User 2',
      name: 'Fred',
      data: [
        { x: dt.getTime() + msd * 10,
          y: 418 },
        { x: dt.getTime() + msd * 20,
          y: 380 },
        { x: dt.getTime() + msd * 30,
          y: 393 },
        { x: dt.getTime() + msd * 40,
          y: 107 },
        { x: dt.getTime() + msd * 50,
          y: 3 },
        { x: dt.getTime() + msd * 60,
          y: 333 }
      ]
    },
    {
      label: 'User 3',
      name: 'Diane',
      data: [
        { x: dt.getTime() + msd * 10,
          y: 473 },
        { x: dt.getTime() + msd * 20,
          y: 311 },
        { x: dt.getTime() + msd * 30,
          y: 405 },
        { x: dt.getTime() + msd * 40,
          y: 65 },
        { x: dt.getTime() + msd * 50,
          y: 101 },
        { x: dt.getTime() + msd * 60,
          y: 18 }
      ]
    },
    {
      label: 'User 4',
      name: 'Jackie',
      data: [
        { x: dt.getTime() + msd * 10,
          y: 56 },
        { x: dt.getTime() + msd * 20,
          y: -7 },
        { x: dt.getTime() + msd * 30,
          y: 68 },
        { x: dt.getTime() + msd * 40,
          y: -137 },
        { x: dt.getTime() + msd * 50,
          y: 208 },
        { x: dt.getTime() + msd * 60,
          y: 470 }
      ]
    }
  ];

  return data.slice(0, numLines);
};

const generateRandomLineChartData = () => {
  const dte = new Date(1546318800000);
  const msd = 86400000;
  const iterations = Math.floor(Math.random() * 6) + 1;
  const data = [];

  for (let idx = 0; idx < iterations; idx++) {
    const uid = idx + 1;
    const user = `User ${uid}`;

    data.push({
      label: user,
      name: user.toUpperCase(),
      data: [
        {
          x: dte.getTime() + msd * 10,
          y: randomizer()
        },
        {
          x: dte.getTime() + msd * 20,
          y: randomizer()
        },
        {
          x: dte.getTime() + msd * 30,
          y: randomizer()
        },
        {
          x: dte.getTime() + msd * 40,
          y: randomizer()
        },
        {
          x: dte.getTime() + msd * 50,
          y: randomizer()
        },
        {
          x: dte.getTime() + msd * 60,
          y: randomizer()
        }
      ]
    });
  }

  return data;
};

const generateRandomData = () => {
  getChartEl('nexus-line-chart').chartData = generateRandomLineChartData();
};

const selectNumLines = (numLines) => {
  const chData = generateLineChartData(numLines);

  getChartEl('nexus-line-chart').chartData = chData;
};


document.addEventListener('nexusLineChartLoaded', (evt) => {
  document.querySelector('nexus-line-chart').chartData = generateLineChartData(3);
});

const addListeners = () => {
  document.getElementById('xLabelInput').addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
      changeXLabel('nexus-line-chart', evt.target.value);
    }
  });

  document.getElementById('yLabelInput').addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
      changeYLabel('nexus-line-chart', evt.target.value);
    }
  });
};

// setTimeout(addListeners(), 3000);
// console.log('This message is shown first');

window.onload = () => {
  addListeners();
};
