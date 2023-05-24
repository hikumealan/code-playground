import html from '!!raw-loader!../../examples/form-field/01_form-field.html';
export default ({ showErrors=false, showMessages=false }) => {
  const formField = document.createElement('div');
  formField.innerHTML = html
  .replace('showErrors=false', `showErrors=${new Boolean(showErrors).toString()}`)
  .replace('showMessages=false', `showMessages=${new Boolean(showMessages).toString()}`)
  return formField;
};
