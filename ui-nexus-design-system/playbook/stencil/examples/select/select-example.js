const customSelectEl = document.getElementById('custom-select-11');
const customMultiSelectEl = document.getElementById('custom-multi-select-2');
const nexOpt = 'nexus-option';
const optionsElement = customSelectEl.querySelectorAll(nexOpt);
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

const onTriggerSelectedMultipleOption = (eventData) => {
  displayValue[eventData.detail.key] = eventData.detail.status;
  selectedValue = Object.keys(displayValue)
    .filter((k) => displayValue[k])
    .join(delimiters);
  customMultiSelectEl.setAttribute('value', selectedValue);
  Object.entries(displayValue).forEach(([_key, value], index) => {
    multiOptionsElement[index].setAttribute('selected', value);
  });
};

const onCloseEvent = (_eventData) => {
  //do something
};

customSelectEl.addEventListener('triggerSelection', (eventData) => {
  onTriggerSelectedOptions(eventData);
});

customMultiSelectEl.addEventListener('triggerSelection', (eventData) => {
  eventData.preventDefault();
  onTriggerSelectedMultipleOption(eventData);
});

customSelectEl.addEventListener('closeEvent', (eventData) => {
  onCloseEvent(eventData);
});

customMultiSelectEl.addEventListener('closeEvent', (eventData) => {
  onCloseEvent(eventData);
});

const toggleSelectAll = (event) => {
  if (typeof event.target.checked !== 'undefined') {
    const isChecked = event.target.checked;
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
