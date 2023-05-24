import html from '!!raw-loader!../../examples/toggle/03_withLabel.html';

export default  () => {
    const withLabelsToggle = document.createElement('div');
     withLabelsToggle.innerHTML= html

    return withLabelsToggle;
};