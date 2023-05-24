import html from '!!raw-loader!../../examples/accordion/05_accordionGroupWithTableSlot.html';
import js from '!!raw-loader!../../examples/accordion/05_accordionGroupWithTableSlot.js';

export default () => {
    const div = document.createElement('section');
    const id = 'accordion-with-table'
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
