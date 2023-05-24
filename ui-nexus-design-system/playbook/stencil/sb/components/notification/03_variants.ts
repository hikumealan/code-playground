import html from '!!raw-loader!../../examples/notification/03_variants.html';

export default () => {
    const component = document.createElement('div');
    component.className = "nexus-row";
    const id = 'notificationVariant-scripts';
    component.innerHTML = html;
    return component;
}
