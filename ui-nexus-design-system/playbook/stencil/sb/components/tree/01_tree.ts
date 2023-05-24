import html from '!!raw-loader!../../examples/tree/01_tree.html';


export default ({open = false}) => {
    const defaultTree = document.createElement('section');
    defaultTree.innerHTML = html.replace('open=false', `open='${open}'`);

    return defaultTree;
}
