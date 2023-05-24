import html from '!!raw-loader!../../examples/checkbox/01_checkbox.html'

export default   ({
    attrId='attrId',
    checked=false,
    disabled=false,
    indeterminate=false,
    required=false
}) => {
    const checkbox = document.createElement('div');
    checkbox.innerHTML=html
    .replace('checked=false', `checked=${new Boolean(checked).toString()}`)
    .replace('disabled=false', `disabled=${new Boolean(disabled).toString()}`)
    .replace('indeterminate=false', `indeterminate=${new Boolean(indeterminate).toString()}`)
    .replace('required=false', `required=${new Boolean(required).toString()}`);
    return checkbox;
};