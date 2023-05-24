import html from '!!raw-loader!../../examples/notification/02_overlay.html';

export default () => {
    const component = document.createElement('div');
    component.className = "nexus-rhythm-4";
    const id = 'notification-scripts';
    component.innerHTML = html;
    return component;
}