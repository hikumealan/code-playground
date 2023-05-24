import html from '!!raw-loader!../../examples/checkbox/02_configuration.html';

export default () => {
  const checkboxWrapper = document.createElement('div');
  checkboxWrapper.innerHTML = html;
  return checkboxWrapper;
};
