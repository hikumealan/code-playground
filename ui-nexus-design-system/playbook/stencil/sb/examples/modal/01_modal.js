const modal = document.getElementById('modaldef');
const closeModal = () => modal.setAttribute("show", new Boolean(false).toString());
const showModal = () => modal.setAttribute("show", new Boolean(true).toString());
modal.addEventListener('closeEvent', () => closeModal());

const confirm = document.getElementById('confirm-modal');
confirm.addEventListener('click', () => closeModal());

const cancel = document.getElementById('cancel-modal');
cancel.addEventListener('click', () => closeModal());

const displayModal = document.getElementById('display-modal');
displayModal.addEventListener('click', () => showModal());