import html from '!!raw-loader!../../examples/toggle/02_switchDisabled.html';


export default  () => {
    const disabledToggle = document.createElement('div');
   disabledToggle.innerHTML=html

    return disabledToggle;
};