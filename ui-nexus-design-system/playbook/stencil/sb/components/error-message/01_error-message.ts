import html from '!!raw-loader!../../examples/error-message/01_error-message.html';

export default ({ message = 'Please enter a first name.' }) => {
  const formField = document.createElement('nexus-form-field');
  formField.innerHTML = html.replace('Please enter a first name.', `${message}`);

  return formField;
};

