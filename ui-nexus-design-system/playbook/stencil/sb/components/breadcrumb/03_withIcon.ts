import html from '!!raw-loader!../../examples/breadcrumb/03_withIcon.html';

export default () => {
    const breadcrumb = document.createElement('nexus-breadcrumb');
    breadcrumb.innerHTML=html;
    return breadcrumb;
}