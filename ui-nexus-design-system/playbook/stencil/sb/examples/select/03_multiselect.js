const customSelectEl = document.getElementById('custom-select-11');
const customMultiSelectEl = document.getElementById('custom-multi-select-2');
const nexOpt = 'nexus-option';
const multiOptionsElement = customMultiSelectEl.querySelectorAll(nexOpt);
const displayValue = {};
let selectedValue;
const delimiters = '::';

setTimeout(() => {
  [...multiOptionsElement].forEach((optionEL) => {
    const isChecked = optionEL.querySelector('nexus-checkbox').checked;
    displayValue[optionEL.getAttribute('value')] = typeof isChecked !== 'undefined';
  });
  Object.entries(displayValue).forEach(([_key, value], index) => {
    multiOptionsElement[index].setAttribute('selected', value);
  });
  setTimeout(() => {
    Object.entries(displayValue).forEach(([_key, value], index) => {
      multiOptionsElement[index].removeAttribute('selected', value);
    });
    [...multiOptionsElement].forEach((optionEL) => {
      displayValue[optionEL.getAttribute('value')] = false;
    });
  }, 500);
}, 500);


const onTriggerSelectedMultipleOption = (eventData) => {
  displayValue[eventData.detail.key] = eventData.detail.status;
  selectedValue = Object.keys(displayValue)
    .filter((k) => displayValue[k])
    .join(delimiters);
  customMultiSelectEl.setAttribute('value', selectedValue);
  Object.entries(displayValue).forEach(([_key, value], index) => {
    multiOptionsElement[index].setAttribute('selected', value);
  });
  if(eventData.detail.key=="Select All")
  {
        const isChecked = eventData.detail.status;
        multiOptionsElement.forEach((optionEl) => {
          optionEl.setAttribute('selected', isChecked);
          optionEl.querySelector('nexus-checkbox').checked = isChecked;
          displayValue[optionEl.value] = isChecked && optionEl.value !== 'Select All';
        });
        selectedValue = Object.keys(displayValue)
          .filter((k) => displayValue[k])
          .join(delimiters);
        customMultiSelectEl.setAttribute('value', selectedValue);
  }
  
};

customMultiSelectEl.addEventListener('triggerSelection', (eventData) => {
  eventData.preventDefault();
  onTriggerSelectedMultipleOption(eventData);
});
