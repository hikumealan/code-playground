var values = 5;
var variable = 'medium advanced';
document.getElementById('experience-slider').addEventListener('input', () => {
  const target = event.target;
  values = parseInt(target.value, 10);

  if (values >= 7) {
    variable = 'master';
  } else if (values >= 4) {
    variable = 'medium advanced';
  } else {
    variable = 'novice';
  }
  document.getElementById('levelDisplay').innerHTML =
    'If you have ' + values.toString() + ' years of experience, you are ' + variable + '.';
});
document.getElementById('levelDisplay').innerHTML =
  'If you have ' + values.toString() + ' years of experience, you are ' + variable + '.';
