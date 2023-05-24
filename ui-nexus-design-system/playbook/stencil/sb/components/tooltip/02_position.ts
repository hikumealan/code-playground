import html from '!!raw-loader!../../examples/tooltip/02_position.html';

export default () => {
    const div = document.createElement('div');
    div.className = `nexus-center-xs nexus-mt-4`;
    div.innerHTML = html;


    return div;
}