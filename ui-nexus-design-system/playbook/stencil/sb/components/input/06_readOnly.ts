import html from '!!raw-loader!../../examples/input/06_readOnly.html';

export default () => {
  const inputReadOnlyForm = document.createElement('div');
  inputReadOnlyForm.innerHTML = html

  return inputReadOnlyForm;
};
