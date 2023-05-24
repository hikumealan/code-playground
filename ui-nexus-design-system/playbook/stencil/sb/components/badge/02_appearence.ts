import html from '!!raw-loader!../../examples/badge/02_appearence.html';

export default () => {
    const component = document.createElement('div');
    component.className = 'nexus-body nexus-center-xs nexus-mt-1';
    const id = 'appearanceBadge-scripts';
    component.innerHTML = html;
    return component;
}