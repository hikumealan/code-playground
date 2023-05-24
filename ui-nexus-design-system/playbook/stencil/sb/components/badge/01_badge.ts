import html from '!!raw-loader!../../examples/badge/01_badge.html';

export default ({
    label = 'Title',
    overlap = false,
    variant = 'default'
}) => {
    const component = document.createElement('div');
    component.className = 'nexus-center-xs nexus-mt-5';
    const id = 'badge-scripts';
    component.innerHTML = html
    .replace('Title', `${label}`)
    .replace('variant=\'default\'', `variant=${variant}`)
    .replace('overlap=false', `overlap=${overlap}`)
    return component;
}



