import html from '!!raw-loader!../../examples/radio/06_disabledSelected.html'

export default  () => {
  const selectedDisabledRadio = document.createElement('div');
  selectedDisabledRadio.setAttribute('class', 'nexus-center-xs nexus-mt-5');
  const disabledRadioWrapper = document.createElement('div');
  disabledRadioWrapper.setAttribute('class', 'nexus-row nexus-center-xs');
  selectedDisabledRadio.appendChild(disabledRadioWrapper);

  disabledRadioWrapper.innerHTML = html
  return selectedDisabledRadio;
};