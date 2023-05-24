import html from '!!raw-loader!../../examples/file-upload/02_uploadImage.html';
import js from '!!raw-loader!../../examples/file-upload/02_uploadImage.js';

export default () => {
    const component = document.createElement('div');
    const id = 'fileUploadImage-scripts';
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

