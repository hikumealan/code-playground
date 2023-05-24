import html from '!!raw-loader!../../examples/accordion/03_cardInsideAccordion.html';
import js from '!!raw-loader!../../examples/accordion/03_cardInsideAccordion.js';

export default () => {
    const component = document.createElement('section');
    const id = 'accordion-with-card';
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

    setTimeout(() => document.body.appendChild(script), 1000);

    return component;
}
