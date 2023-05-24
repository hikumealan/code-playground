import html from '!!raw-loader!../../examples/accordion/02_accordionAlignment.html';
import js from '!!raw-loader!../../examples/accordion/02_accordionAlignment.js';

export default () => {
    const div = document.createElement('section');
    const id = 'accordion-alignment';
    div.innerHTML = html;

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

    return div;
}