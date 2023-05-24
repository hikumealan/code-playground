const toastWrap = document.getElementById('toastWrap');

let closeEventListener;

// eslint-disable-next-line no-unused-vars
const handleClick = () => {
  if (closeEventListener) {
    closeEventListener.unsubscribe();
  }

  toastWrap.innerHTML = `
    <nexus-toast id="toast" closeable="true">Information message.</nexus-toast>
  `;

  closeEventListener = document.getElementById('toast').addEventListener('closeEvent', () => {
    toastWrap.innerHTML = '';
  });
};
