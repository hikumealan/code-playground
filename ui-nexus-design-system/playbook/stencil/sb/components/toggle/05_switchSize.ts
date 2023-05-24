import html from '!!raw-loader!../../examples/toggle/05_switchSize.html';

export default  () => {
  const switchSizeVariants = document.createElement('div');
  switchSizeVariants.innerHTML = html;
  return switchSizeVariants;
};