import html from '!!raw-loader!../../examples/select/02_custom.html';
import js from '!!raw-loader!../../examples/select/02_custom.js';

export default () => {
    const customSelect = document.createElement('div');
    const id = 'custom-select-scripts';
    customSelect.innerHTML = html;

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

    return customSelect;
}