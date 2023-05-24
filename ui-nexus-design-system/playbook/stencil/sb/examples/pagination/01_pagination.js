const pagination = document.getElementById('pagination-example');

document.getElementById('pagination-example').addEventListener('changeEvent', () => {
  pagination.setAttribute('current', event.detail);
});