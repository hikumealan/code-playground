import html from '!!raw-loader!../../examples/toggle/04_types.html';

export default  () => {
    const typeButton = document.createElement('div');
    typeButton.innerHTML=html

    return typeButton;
};