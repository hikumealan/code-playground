import html from '!!raw-loader!../../examples/accordion/04_accordionGroup.html';
import js from '!!raw-loader!../../examples/accordion/04_accordionGroup.js';

export default () => {
    const accordionGroupComponent = document.createElement('section');
    const id = 'accordion-group-scripts'
    accordionGroupComponent.innerHTML = html;

    const existingScript = document.getElementById(id) as HTMLElement;
    if (existingScript) {
        existingScript.remove()   
    }

    const script = document.createElement('script');
    script.id = id
    script.text = `
        (function(){${js}})();
    `

    setTimeout(() => document.body.appendChild(script), 1000);

    return accordionGroupComponent;
}
