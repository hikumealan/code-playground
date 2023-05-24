import html from '!!raw-loader!../../examples/progress-bar/02_infinite.html';
import js from '!!raw-loader!../../examples/progress-bar/02_infinite.js';

export default () => {
    const component = document.createElement('div');
    component.className='nexus-center-xs nexus-pt-6';
    const id = 'progressBarInfinite-scripts';
    component.innerHTML = html;
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

