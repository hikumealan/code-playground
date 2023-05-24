const customSelectEl = document.getElementById('custom-select-11');
const nexOpt = 'nexus-option';
const optionsElement = customSelectEl.querySelectorAll(nexOpt);
const displayValue = {};
let selectedValue;
const delimiters = '::';

const onTriggerSelectedOptions = (eventData) => {
  const optionElements = customSelectEl.querySelectorAll('nexus-option');
  customSelectEl.setAttribute('value', eventData.detail.label);
  if (optionElements && optionElements.length) {
    optionElements.forEach((optionEl) => {
      const value = optionEl.getAttribute('value');
      optionEl.setAttribute('selected', value === eventData.detail.key);
    });
  }
};

const onCloseEvent = (_eventData) => {
  //do something
};

customSelectEl.addEventListener('triggerSelection', (eventData) => {
  onTriggerSelectedOptions(eventData);
});

customSelectEl.addEventListener('closeEvent', (eventData) => {
  onCloseEvent(eventData);
});
