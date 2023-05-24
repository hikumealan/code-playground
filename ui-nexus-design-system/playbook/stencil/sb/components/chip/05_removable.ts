import html from '!!raw-loader!../../examples/chip/05_removable.html';
import js from '!!raw-loader!../../examples/chip/05_removable.js';

export default () => {
    const component = document.createElement('div');
    component.setAttribute('style','padding: 1em');
    const id = 'chipRemovable-scripts';
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
}