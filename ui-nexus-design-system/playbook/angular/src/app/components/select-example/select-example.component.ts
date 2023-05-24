import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss']
})
export class SelectExampleComponent implements OnInit {
  selectOptions = [
    {
      value: 'Please Select',
      isSelected: true,
      disabled: true
    },
    {
      value: 'Option 1',
      isSelected: false
    },
    {
      value: 'Option 2',
      isSelected: false
    },
    {
      value: 'Option 3',
      isSelected: false
    }
  ];

  multiSelectOption = [
    {
      value: 'Option 1',
      isSelected: false
    },
    {
      label: 'Option 2',
      value: 'Option2',
      isSelected: false
    },
    {
      label: 'Option 3',
      value: 'Option3',
      isSelected: false
    }
  ];

  multiSelectDefaultPlaceholder = 'Please Select';

  delimiter = '::';

  objectKeys = Object.keys;

  singleSelectValue = '';

  multiSelectValue = '';

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.singleSelectValue = this.setSingleSelectPlaceholder();
    this.multiSelectValue = this.setMultiSelectPlaceholder();
  }

  handleSingleSelectData = (eventData) => {
    const updateSelectState = [...this.selectOptions];
    updateSelectState.forEach((obj) => obj.isSelected = false);
    const objIndex = updateSelectState.findIndex((obj) => obj.value === eventData.detail.key);
    updateSelectState[objIndex].isSelected = true;
    this.selectOptions = [...updateSelectState];
    this.singleSelectValue = this.setSingleSelectPlaceholder();
  };

  setSingleSelectPlaceholder = () => this.selectOptions
    .filter((el) => el.isSelected ? el.value : '')
    .map((el) => el.value)
    .join(this.delimiter);

  handleMultiSelectData = (eventData) => {
    if (eventData.detail.key) {
      eventData.preventDefault();
      const updateSelectState = [...this.multiSelectOption];
      const objIndex = updateSelectState.findIndex((obj) => obj.value === eventData.detail.key);
      updateSelectState[objIndex].isSelected = eventData.detail.status;
      this.multiSelectOption = [...updateSelectState];
      this.multiSelectValue = this.setMultiSelectPlaceholder();
    }
  };

  setMultiSelectPlaceholder = () => {
    const selecteddataObj = [];
    this.multiSelectOption.forEach((element) => {
      if (element.isSelected) {
        selecteddataObj.push(element);
      }
    });
    const resStr = selecteddataObj.map((elem) => elem.label ? elem.label : elem.value).join(this.delimiter);

    return resStr ? resStr : this.multiSelectDefaultPlaceholder;
  };

  selectOrDeSelectAllOptions = (event) => {
    const updateSelectState = [...this.multiSelectOption];
    updateSelectState.forEach((obj) => obj.isSelected = event.target.checked);
    this.multiSelectOption = [...updateSelectState];
    this.multiSelectValue = this.setMultiSelectPlaceholder();
  };

  handleCloseEvent = (_event) => {};
}
