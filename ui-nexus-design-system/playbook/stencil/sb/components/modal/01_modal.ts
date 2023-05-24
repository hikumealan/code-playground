import html from '!!raw-loader!../../examples/modal/01_modal.html';
import js from '!!raw-loader!../../examples/modal/01_modal.js';

export default ({
    fullscreen = false,
    show = false,
    size = ''
}) => {
    const section = document.createElement('section');
    const id = 'basic-modal-script';
    section.innerHTML = html
    .replace('fullscreen=\'false\'', `fullscreen='${fullscreen}'`)
    .replace('show=\'false\'', `show='${show}'`)
    .replace('size=\'md\'', `size='${size}'`);

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