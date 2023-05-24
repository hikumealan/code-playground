import html from '!!raw-loader!../../examples/toggle/01_toggle.html';

export default ({
  disabled = false,
  labelActive='',
  labelInactive='',
  required = false,
  size = 'md',
  toggled = false,
  type = 'switch'
}) => {
  const toggleWrapper = document.createElement('div');
  toggleWrapper.innerHTML = html
    .replace('disabled=false', `disabled=${disabled}`)
    .replace('labelActive=\'\'', `labelActive=${labelActive}`)
    .replace('labelInactive=\'\'', `labelInactive=${labelInactive}`)
    .replace('required=false', `required=${required}`)
    .replace('size=\'md\'', `size=${size}`)
    .replace('toggled=false', `toggled=${toggled}`)
    .replace('type=\'switch\'', `type=${type}`)

  return toggleWrapper;
};