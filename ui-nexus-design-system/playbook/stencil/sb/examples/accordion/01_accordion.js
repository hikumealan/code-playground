const accordion = document.getElementById('acc-default');


document.getElementById('acc-default').addEventListener('toggleEvent', () => {
    const open = accordion.getAttribute('open') === 'true';
    accordion.setAttribute('open', !open);
});