const accordionEl = document.getElementById('acc-default');

const toggleAcc = () => {
  const open = accordionEl.getAttribute('open') === 'true';
  accordionEl.setAttribute('open', !open);
};

accordionEl.addEventListener('toggleEvent', () => {
  toggleAcc();
});
