import html from '!!raw-loader!../../examples/pagination/01_pagination.html';
import js from '!!raw-loader!../../examples/pagination/01_pagination.js';

export default ({
    current = '3',
    max = '5'
}) => {
    const component = document.createElement('div');
    const id = 'pagination-scripts';
    component.innerHTML = html
    .replace('current=\'3\'', `current=${current}`)
    .replace('max=\'5\'', `max=${max}`);

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