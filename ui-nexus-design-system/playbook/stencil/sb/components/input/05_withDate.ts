import html from '!!raw-loader!../../examples/input/05_withDate.html';

export default () => {
  const inputNumberForm = document.createElement('div');
  inputNumberForm.innerHTML = html;

  return inputNumberForm;
};