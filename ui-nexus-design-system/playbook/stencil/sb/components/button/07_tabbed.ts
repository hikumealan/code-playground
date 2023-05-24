import html from '!!raw-loader!../../examples/button/07_tabbed.html';

export default() => {
  const component = document.createElement('div');
  component.className = 'nexus-row nexus-body';
  component.innerHTML=html;
  return component;
};