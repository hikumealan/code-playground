import html from '!!raw-loader!../../examples/file-upload/01_file-upload.html';
import js from '!!raw-loader!../../examples/file-upload/01_file-upload.js';

export default ({
    disabled = false,
    multiple = false,
}) => {
    const component = document.createElement('div');
    const id = 'fileUpload-scripts';
    component.innerHTML = html
    .replace('disabled=false', `disabled=${disabled}`)
    .replace('multiple=false', `multiple=${multiple}`)


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

