import html from '!!raw-loader!../../examples/error-message/02_emailValidation.html';

export default () => {
  const formField = document.createElement('nexus-form-field');
  formField.innerHTML = html;

  return formField;
};
