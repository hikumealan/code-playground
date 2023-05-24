const modalEl1 = document.getElementById('modal1');
const modalEl2 = document.getElementById('modal2');

const closeModal = () => {
  modalEl1.setAttribute('show', false);
  modalEl2.setAttribute('show', false);
};

// eslint-disable-next-line no-unused-vars
const showModal = (size) => {
  modalEl2.setAttribute('show', true);
  modalEl2.setAttribute('size', size);
};

// eslint-disable-next-line no-unused-vars
const showFullscreenModal = (flag) => {
  modalEl1.setAttribute('show', true);
  modalEl1.setAttribute('fullscreen', flag);
};

modalEl1.addEventListener('closeEvent', () => {
  closeModal();
});

modalEl2.addEventListener('closeEvent', () => {
  closeModal();
});
