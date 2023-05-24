import html from '!!raw-loader!../../examples/breadcrumb/01_breadcrumb.html';

export default ({separator = '-'}) => {
    const breadcrumb = document.createElement('div');
    breadcrumb.innerHTML=html
    .replace('separator = \'-\'', `separator = ${separator}`);
    return breadcrumb;
}