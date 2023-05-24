const checkBox = document.getElementById('nxsCheckBox');
const chipSection = document.getElementById('dvChipSection');
const chipElement = document.getElementById('nxsChip');

checkBox.addEventListener('change', () => {
    if(event.target.checked) {
        chipSection.prepend(chipElement);
    } else {
        chipElement.remove();
    }
});

chipElement.addEventListener('triggerRemovableClick', () => {
    chipElement.remove();
    checkBox.setAttribute('checked', 'false');
});