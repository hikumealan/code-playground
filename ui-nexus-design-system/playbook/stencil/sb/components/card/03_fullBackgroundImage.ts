import html from '!!raw-loader!../../examples/card/03_fullBackgroundImage.html';

export default () => {
    const div = document.createElement('div');
    div.className = 'nexus-row';
    div.innerHTML = html;

    return div;
}