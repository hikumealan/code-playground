import html from '!!raw-loader!../../examples/chip/03_variant.html';

export default () => {
    const component = document.createElement('div');
    component.className = 'nexus-center-xs nexus-mt-5';
    const id = 'chipVariant-scripts';
    component.innerHTML = html;
    return component;
}
