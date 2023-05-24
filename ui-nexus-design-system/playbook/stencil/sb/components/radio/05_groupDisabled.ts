import html from '!!raw-loader!../../examples/radio/05_groupDisabled.html'

export default  () => {
  const disabledRadio = document.createElement('div');
  disabledRadio.innerHTML =  html
  return disabledRadio;
};
