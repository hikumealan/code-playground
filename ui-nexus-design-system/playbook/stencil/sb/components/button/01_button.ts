import html from '!!raw-loader!../../examples/button/01_button.html';

export default() => {
  const component = document.createElement('div');
  component.className = 'nexus-center-xs nexus-mt-5';
  component.innerHTML=html;
  return component;
};
