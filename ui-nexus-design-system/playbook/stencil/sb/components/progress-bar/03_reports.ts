import html from '!!raw-loader!../../examples/progress-bar/03_reports.html';

export default () => {
    const component = document.createElement('div');
    component.setAttribute('style', "margin-top: 10px;");
    const id = 'progressBar-scripts';
    component.innerHTML = html;
    return component;
}