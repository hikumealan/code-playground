import html from '!!raw-loader!../../examples/select/03_multiselect.html';
import js from '!!raw-loader!../../examples/select/03_multiselect.js';

export default () => {
    const multiSelect = document.createElement('div');
    const id = 'multiselect-scripts';
    multiSelect.innerHTML = html;

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

    return multiSelect;
}