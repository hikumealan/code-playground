import html from '!!raw-loader!../../examples/pin-entry/02_pinEntryDisabled.html';

export default () => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div;
};
