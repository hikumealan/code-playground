import html from '!!raw-loader!../../examples/table/02_basic.html';

const tableBasicStory = () => {
    const component = document.createElement('div');
    component.innerHTML = html;

    return component;
}

export default tableBasicStory;