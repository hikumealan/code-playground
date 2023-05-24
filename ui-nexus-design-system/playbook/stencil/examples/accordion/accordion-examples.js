const accordionExl = document.getElementById('accordion-example-1');
const accordionE2 = document.getElementById('accordion-example-2');
const accordionE3 = document.getElementById('accordion-example-3');

const accordionGroupE1 = document.getElementById('accordion-group-example-1');
const accordionGroupE2 = document.getElementById('accordion-group-example-2');
const accordionGroupE3 = document.getElementById('accordion-group-example-3');
const accordionGroupE4 = document.getElementById('accordion-group-example-4');

const accordionGroupXS = document.getElementById('accordion-example-xs');
const accordionGroupS = document.getElementById('accordion-example-sm');
const accordionGroupM = document.getElementById('accordion-example-md');
const accordionGroupL = document.getElementById('accordion-example-lg');
const accordionGroupXL = document.getElementById('accordion-example-xl');

const toggleAccordion = (identifier) => {
  const open = identifier.getAttribute('open') === 'true';
  identifier.setAttribute('open', !open);
};

accordionExl.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionExl);
});

accordionE2.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionE2);
});

accordionE3.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionE3);
});

accordionGroupE1.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupE1);
});

accordionGroupE2.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupE2);
});

accordionGroupE3.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupE3);
});

accordionGroupE4.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupE4);
});

accordionGroupXS.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupXS);
});

accordionGroupS.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupS);
});

accordionGroupM.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupM);
});

accordionGroupL.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupL);
});

accordionGroupXL.addEventListener('toggleEvent', () => {
  toggleAccordion(accordionGroupXL);
});
