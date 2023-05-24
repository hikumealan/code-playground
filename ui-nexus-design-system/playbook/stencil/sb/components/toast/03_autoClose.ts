import html from '!!raw-loader!../../examples/toast/03_autoClose.html';
import js from '!!raw-loader!../../examples/toast/03_autoClose.js';

const AutoClose = () => {
    const section = document.createElement('section');
    section.id = 'auto-close-section';
    const id = 'toast-with-autoclose-script';
    section.innerHTML = html

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

    return section;
}

export default AutoClose;