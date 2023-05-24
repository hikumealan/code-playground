const groupA = document.getElementById('accordion-group-a');
const groupB = document.getElementById('accordion-group-b');

groupA.addEventListener('toggleEvent', () => {
    const open = groupA.getAttribute('open') === 'true';
    groupA.setAttribute('open', new Boolean(!open).toString());
});

groupB.addEventListener('toggleEvent', () => {
    const open = groupB.getAttribute('open') === 'true';
    groupB.setAttribute('open', new Boolean(!open).toString());
});