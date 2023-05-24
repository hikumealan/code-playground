import html from '!!raw-loader!../../examples/chip/04_darkTheme.html';

export default () => {
    const component = document.createElement('div');
    component.className = 'nexus-theme-dark';
    component.setAttribute('style','padding: 1em');
    const id = 'chipDark-scripts';
    component.innerHTML = html;
    return component;
}
