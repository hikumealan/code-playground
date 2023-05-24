import html from '!!raw-loader!../../examples/loader/02_overlay.html';

export default () => {
    const component = document.createElement('div');
    component.className='nexus-center-xs nexus-pt-5';
    const id = 'loaderOverlay-scripts';
    component.innerHTML = html;
    return component;
}