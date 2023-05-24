import html from '!!raw-loader!../../examples/button/04_darkTheme.html';

export default() => {
  const component = document.createElement('div');
  component.innerHTML=html;
  return component;
};