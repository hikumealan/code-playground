import html from '!!raw-loader!../../examples/radio/01_radio.html';

export default ({
  checked=false,
  disabled=false,
  required=false
}) => {
  const defaultRadio = document.createElement('div');
  defaultRadio.innerHTML = html
    .replace('checked=false', `checked=${checked}`)
    .replace('disabled=false', `disabled=${disabled}`)
    .replace('required=false', `required=${new Boolean(required).toString()}`);
 
  return defaultRadio;
};
