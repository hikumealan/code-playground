import html from '!!raw-loader!../../examples/input/03_withNumber.html';
export default () => {
  const inputNumberForm = document.createElement('div');
  inputNumberForm.innerHTML = html;

  return inputNumberForm;
};