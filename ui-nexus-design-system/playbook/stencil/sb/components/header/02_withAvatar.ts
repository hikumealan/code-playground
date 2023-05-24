import html from '!!raw-loader!../../examples/header/02_withAvatar.html';

export default () => {
  const dropdown = document.createElement('div');
  dropdown.innerHTML = html;
  return dropdown;
};