import html from '!!raw-loader!../../examples/badge/03_buttonOverlay.html';

export default () => {
    const component = document.createElement('div');
    component.className = 'nexus-center-xs nexus-mt-5';
    const id = 'badgeOverlay-scripts';
    component.innerHTML = html;
    return component;
}


