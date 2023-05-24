import html from '!!raw-loader!../../examples/search/02_filterTable.html'
import js from '!!raw-loader!../../examples/search/02_filterTable.js'

export default () => {
    const filterTableSearch = document.createElement('section');
    const id = 'filterTableSearch-scripts';
    filterTableSearch.innerHTML=html;

    const existingScript = document.getElementById(id) as HTMLElement;
    if (existingScript) {
        existingScript.remove()   
    }
    const script = document.createElement('script');
    script.id = id
    script.text = `
        (function(){${js}})();
    `
    setTimeout(() => document.body.appendChild(script), 100)
    return filterTableSearch;
};