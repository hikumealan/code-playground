import html from '!!raw-loader!../../examples/loader/01_loader.html';

export default ({
    show =true,
}) => {
    const component = document.createElement('div');
    const id = 'loader-scripts';
    component.innerHTML = html
    .replace('show=true', `show=${show}`);
    return component;
}