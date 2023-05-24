import html from '!!raw-loader!../../examples/error-message/03_nameValidation.html';

export default   () => {
  const formField = document.createElement('nexus-form-field');
  formField.innerHTML = html;

  return formField;
};