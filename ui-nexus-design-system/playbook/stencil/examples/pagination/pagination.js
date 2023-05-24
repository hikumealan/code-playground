// /* eslint-disable no-unused-vars */
const paginationEl = document.getElementById('pagination1');
paginationEl.setAttribute('current', 3);
paginationEl.setAttribute('max', 5);

paginationEl.addEventListener('changeEvent', (event) => {
  paginationEl.setAttribute('current', event.detail);
});
