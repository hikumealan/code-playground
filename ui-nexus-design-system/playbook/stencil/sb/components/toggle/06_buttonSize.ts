import html from '!!raw-loader!../../examples/toggle/06_buttonSize.html';

export default() => {
    const buttonSizeVariants = document.createElement('div');
    buttonSizeVariants.setAttribute('class', 'nexus-row')
    buttonSizeVariants.innerHTML = html;

    return buttonSizeVariants;
};