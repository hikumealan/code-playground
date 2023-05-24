import html from '!!raw-loader!../../examples/breadcrumb/02_disabled.html';

export default () => {
    const breadcrumb = document.createElement('div');
    breadcrumb.innerHTML=html;
    return breadcrumb;
}