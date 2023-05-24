import html from '!!raw-loader!../../examples/slider/02_disabled.html'

export default  () => {
    const disabledSlider = document.createElement('div');
    disabledSlider.innerHTML=html
    return disabledSlider;
};