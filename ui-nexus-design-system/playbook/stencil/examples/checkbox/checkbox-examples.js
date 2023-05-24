const checkboxEl = document.getElementById('check1');
const indeterminateEl = document.getElementById('indeterminate1');
const disableEl = document.getElementById('disable1');
const exampleEl = document.getElementById('example1');

checkboxEl.addEventListener('change', (event) => {
  exampleEl.setAttribute('checked', event.target.checked);
});

indeterminateEl.addEventListener('change', (event) => {
  exampleEl.setAttribute('indeterminate', event.target.checked);
});

disableEl.addEventListener('change', (event) => {
  exampleEl.setAttribute('disabled', event.target.checked);
});
