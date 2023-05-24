import html from '!!raw-loader!../../examples/chip/01_chip.html';

export default ({
    text = 'Chip',
    disabled = false,
    removable = false,
    success = false,
    error = false
}) => {
    const component = document.createElement('div');
    component.className = 'nexus-center-xs nexus-mt-5';
    const id = 'chip-scripts';
    component.innerHTML = html
    .replace('Chip', `${text}`)
    .replace('disabled=false', `disabled=${disabled}`)
    .replace('removable=false', `removable=${removable}`)
    .replace('success=false', `success=${success}`)
    .replace('error=false', `error=${error}`)
    return component;
}

