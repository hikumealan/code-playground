const start = document.getElementById('accordion-align-start');
const center = document.getElementById('accordion-align-center');
const end = document.getElementById('accordion-align-end');

start.addEventListener('toggleEvent', () => {
    const open = start.getAttribute('open') === 'true';
    start.setAttribute('open', !open);
});
  
center.addEventListener('toggleEvent', () => {
    const open = center.getAttribute('open') === 'true';
    center.setAttribute('open', !open);
});
  
end.addEventListener('toggleEvent', () => {
    const open = end.getAttribute('open') === 'true';
    end.setAttribute('open', !open);
});