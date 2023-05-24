import html from '!!raw-loader!../../examples/form-field/02_disabled.html';
export default () => {
  const disabledFormField = document.createElement('div');
  disabledFormField.innerHTML = html;

  return disabledFormField;
};
