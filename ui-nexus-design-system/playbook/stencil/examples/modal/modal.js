const modalEl = document.getElementById('modaldef');
modalEl.setAttribute("show",false);

const closeModal1 = () => {
  modalEl.setAttribute('show', false);
};

// eslint-disable-next-line no-unused-vars
const showModal1 = () => {
  modalEl.setAttribute('show', true);
};

modalEl.addEventListener('closeEvent', () => {
  closeModal1();
});
