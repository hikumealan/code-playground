import html from '!!raw-loader!../../examples/input/04_withPassword.html'

export default () => {
  const passwordForm = document.createElement('div');
  passwordForm.innerHTML = html
  return passwordForm;
};
