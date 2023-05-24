import html from '!!raw-loader!../../examples/avatar/02_size.html';

export default   () => {
  const avatar = document.createElement('div');
  avatar.innerHTML = html;
  return avatar;
};