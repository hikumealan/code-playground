import html from '!!raw-loader!../../examples/chip/02_group.html';

export default () => {
    const component = document.createElement('div');
    component.className = 'nexus-center-xs nexus-mt-5';
    const id = 'chipGroup-scripts';
    component.innerHTML = html;
    return component;
}