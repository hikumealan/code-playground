import html from '!!raw-loader!../../examples/card/02_backgroundColor.html';

export default () => {
    const div = document.createElement('div');
    div.className = 'nexus-row';
    div.innerHTML = html;

    return div;
}