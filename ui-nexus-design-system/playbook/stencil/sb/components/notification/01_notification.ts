import html from '!!raw-loader!../../examples/notification/01_notification.html';

export default ({
    variant = 'info'
}) => {
    const component = document.createElement('div');
    component.className = "nexus-row nexus-around-xs";
    const id = 'notification-scripts';
    component.innerHTML = html
    .replace('variant=\'info\'', `variant=${variant}`);
    return component;
}