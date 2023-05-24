import html from '!!raw-loader!../../examples/form-field/03_withMessage.html';
export default () => {
  const withMessage = document.createElement('div');
  withMessage.innerHTML = html;

  return withMessage;
};
