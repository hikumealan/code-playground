import html from '!!raw-loader!../../examples/modal/02_termsOfUse.html';
import js from '!!raw-loader!../../examples/modal/02_termsOfUse.js';

export default () => {
    const section = document.createElement('section');
    const id = 'terms-of-use-modal-script';
    section.innerHTML = html;

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
