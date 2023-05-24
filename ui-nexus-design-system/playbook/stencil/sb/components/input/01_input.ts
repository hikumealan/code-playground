import html from '!!raw-loader!../../examples/input/01_input.html';

export default ({
 attrId='',
  autocomplete=false,
  disabled=false,
  max='',
  maxLength=10,
  min='',
  minLength=0,
  placeholder='',
  readonly=false,
  required=false,
  type='text',
  value=''
}) => {
  const formField=document.createElement('div');
  
  formField.innerHTML=html
    .replace(`attrId=""`, `attrId=${attrId}`)
    .replace(`autocomplete=false`, `autocomplete=${autocomplete}`)
    .replace(`disabled=false`, `disabled=${disabled}`)
    .replace(`maxLength=10`, `max-length=${maxLength}`)
    .replace(`max=""`, `max=${max}`)
    .replace(`min=""`, `min=${min}`)
    .replace(`minLength=0`, `min-length=${minLength}`)
    .replace(`placeholder=""`, `placeholder=${placeholder}`)
    .replace(`readonly=false`, `read-only=${readonly}`)
    .replace(`required=false`, `required=${required}`)
    .replace(`type="text"`, `type=${type}`)
    .replace(`value=""`, `value=${value}`);

  return formField;
};
