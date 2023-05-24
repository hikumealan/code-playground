import html from '!!raw-loader!../../examples/radio/02_group.html'

export default  () => {
  const radioGroup = document.createElement('div');
  radioGroup.innerHTML = html;
  return radioGroup;
};