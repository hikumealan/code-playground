import html from '!!raw-loader!../../examples/textarea/01_textarea.html';

const Textarea = ({
  cols = 100,
  disabled = false,
  maxLength = 5,
  minLength = 0,
  placeholder = '',
  required = false,
  rows = 3
}) => {
  const textarea = document.createElement('div');
  textarea.innerHTML = html
  .replace('cols=100', `cols=${cols}`)
  .replace('disabled=false', `disabled=${disabled}`)
  .replace('required=false', `required=${required}`)
  .replace('placeholder=""',`placeholder=${placeholder}`)
  .replace('maxLength=5', `max-length=${maxLength}`)
  .replace('minLength=0', `min-length=${minLength}`)
  .replace('rows=3', `rows='${rows}'`)

  return textarea;
};

export default Textarea;
