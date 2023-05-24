const cardInsideAccordion = document.getElementById('card-inside-accordion');

cardInsideAccordion.addEventListener('toggleEvent', () => {
    const open = cardInsideAccordion.getAttribute('open') === 'true';
    cardInsideAccordion.setAttribute('open', !open);
});