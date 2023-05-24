import html from '!!raw-loader!../../examples/pin-entry/03_withCustomLength.html';
export default() => {
  const div = document.createElement('div');
  div.innerHTML = html;

  return div;
};