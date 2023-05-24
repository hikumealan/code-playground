import html from '!!raw-loader!../../examples/tab-bar/01_tab-bar.html';
import js from '!!raw-loader!../../examples/tab-bar/01_tab-bar.js';

export default () => {
  const component = document.createElement('section');
  const id = 'tabbar-scripts';
  component.innerHTML = html;

  const existingScript = document.getElementById(id) as HTMLElement;
  if (existingScript) {
      existingScript.remove()   
  }

  const script = document.createElement('script');
  script.id = id
  script.text = `
      (function(){${js}})();
  `

  setTimeout(() => document.body.appendChild(script), 1000)

  return component;
};