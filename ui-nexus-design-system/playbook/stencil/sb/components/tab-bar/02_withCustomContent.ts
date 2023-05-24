import html from '!!raw-loader!../../examples/tab-bar/02_withCustomContent.html';
import js from '!!raw-loader!../../examples/tab-bar/02_withCustomContent.js';


export default () => {
  const component = document.createElement('section');
  const id = 'tabbar-custom-content-scripts';
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