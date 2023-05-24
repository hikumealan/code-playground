import html from '!!raw-loader!../../examples/dropdown/03_withSelect.html';

export default () => {
  const dropdown = document.createElement('div');
  dropdown.innerHTML = html;
  return dropdown;
};