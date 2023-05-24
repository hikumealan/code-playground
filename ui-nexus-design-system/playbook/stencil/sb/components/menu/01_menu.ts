import html from '!!raw-loader!../../examples/menu/01_menu.html';
import js from '!!raw-loader!../../examples/menu/01_menu.js';

export default ({
    open = false,
    position = 'right'
}) => {
    const component = document.createElement('div');
    const id = 'menuscripts';
    component.innerHTML = html
    .replace(`open="false"`, `open=${open}`)
    .replace(`position="right"`, `position=${position}`);

    const existingScript = document.getElementById(id) as HTMLElement;
    if (existingScript) {
        existingScript.remove();
    }
    const script = document.createElement('script');
    script.id = id
    script.text = `
        (function(){${js}})();
    `
    setTimeout(() => document.body.appendChild(script), 1000)
    return component;
};