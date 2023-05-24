import html from '!!raw-loader!../../examples/header/01_header.html';

export default() => {
    const headerWrapper = document.createElement('div');
    headerWrapper.innerHTML = html;
    return headerWrapper;
};