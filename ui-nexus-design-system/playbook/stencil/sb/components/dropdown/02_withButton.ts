import html from '!!raw-loader!../../examples/dropdown/02_withButton.html';

export default () => {
  const dropdown = document.createElement('div');
  dropdown.className = "nexus-container";
  dropdown.innerHTML = html;
  return dropdown;
};