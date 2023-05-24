import html from '!!raw-loader!../../examples/slider/03_validation.html'
import js from '!!raw-loader!../../examples/slider/03_validation.js'

export default  () => {
    const disabledSlider = document.createElement('div');
    const id = 'sliderValidation-scripts';
    disabledSlider.innerHTML=html
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
    return disabledSlider;
};