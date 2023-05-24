import html from '!!raw-loader!../../examples/badge/04_iconOverlay.html';

export default () => {
    const component = document.createElement('div');
    component.className = 'nexus-row nexus-around-xs nexus-mt-5';
    const id = 'badge-iconoverlay-scripts';
    component.innerHTML = html;
    return component;
}


