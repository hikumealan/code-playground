import html from '!!raw-loader!../../examples/avatar/05_initials.html';

export default  () => {
  const div = document.createElement('div');
  div.className = 'nexus-row';

  div.innerHTML = html;

  return div;
};