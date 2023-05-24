import html from '!!raw-loader!../../examples/input/07_disabled.html'

export default () => {
  const disabledForm = document.createElement('div');
  disabledForm.innerHTML =  html
  return disabledForm;
};
