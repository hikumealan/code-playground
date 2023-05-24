import html from '!!raw-loader!../../examples/toast/02_variants.html';

export default () => {
    const div = document.createElement('section');
    div.innerHTML = html

    return div;
}