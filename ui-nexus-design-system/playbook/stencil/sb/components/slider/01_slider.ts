import html from '!!raw-loader!../../examples/slider/01_slider.html'

export default({
    disabled = false,
    max = '100',
    min = '0',
    required=false
}) => {
    const slider = document.createElement('div');
    slider.innerHTML=html
    .replace('max=\'100\'',`max=${max}`)
    .replace('min=\'0\'',`min=${min}`)
    .replace('disabled=false',`disabled=${new Boolean(disabled).toString()}`)
    .replace('required=false',`required=${new Boolean(required).toString()}`)
    return slider;
};