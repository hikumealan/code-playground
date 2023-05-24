import html from '!!raw-loader!../../examples/progress-bar/01_progress-bar.html';

export default ({
    value='50',
    circle=false,
    indeterminate=false,
    error=false
}) => {
    const component = document.createElement('div');
    const id = 'progressBar-scripts';
    component.innerHTML = html
    .replace('value=\'50\'', `value=${value}`)
    .replace('circle=false', `circle=${circle}`)
    .replace('indeterminate=false', `indeterminate=${indeterminate}`)
    .replace('error=false', `error=${error}`);
    return component;
}