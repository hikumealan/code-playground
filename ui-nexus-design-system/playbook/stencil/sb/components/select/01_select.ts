import html from '!!raw-loader!../../examples/select/01_select.html';

export default ({
    disabled = false,
    multiple = false,
    placeholder = '',
    required = false
}) => {
    const defaultSelect = document.createElement('div');
    defaultSelect.innerHTML = html
    .replace('disabled=false', `disabled=${new Boolean(disabled).toString()}`)
    .replace('multiple=false', `multiple=${new Boolean(multiple).toString()}`)
    .replace('required=false', `required=${new Boolean(required).toString()}`)
    .replace('placeholder=""', `placeholder=${placeholder}`)

    return defaultSelect;
}