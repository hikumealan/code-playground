import html from '!!raw-loader!../../examples/button/02_size.html';

export default() => {
  const component = document.createElement('div');
  component.className = 'nexus-center-xs nexus-mt-2';
  component.innerHTML=html;
  return component;
};