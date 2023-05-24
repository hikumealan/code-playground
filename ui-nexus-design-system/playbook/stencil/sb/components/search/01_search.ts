import html from '!!raw-loader!../../examples/search/01_search.html'
import js from '!!raw-loader!../../examples/search/01_search.js'

export default () => {
    const defaultSearch = document.createElement('div');
    const id = 'search-scripts';
    defaultSearch.innerHTML=html;

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
    return defaultSearch;
};