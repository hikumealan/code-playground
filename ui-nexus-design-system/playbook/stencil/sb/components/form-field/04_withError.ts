import html from '!!raw-loader!../../examples/form-field/04_withError.html';
export default() => {
  const withError = document.createElement('div');
  withError.innerHTML = html;

  return withError;
};
