import html from '!!raw-loader!../../examples/accordion/01_accordion.html';
import js from '!!raw-loader!../../examples/accordion/01_accordion.js';

export default ({
    open = false,
    size = 'md',
    align = 'start'
}) => {
    const component = document.createElement('section');
    const id = 'accordion-scripts';
    component.innerHTML = html
    .replace('open=false', `open=${open}`)
    .replace('size=\'md\'', `size=${size}`)
    .replace('align=\'start\'', `align=${align}`)

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

