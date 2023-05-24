import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { multiselectOptions } from '../../constants';

@Component({
  selector: 'app-multiselect',
  templateUrl: './03_multiselect.component.html'
})
export default class MultiselectComponent implements OnInit {
  multiSelectOption = multiselectOptions;

  multiSelectDefaultPlaceholder = 'Please Select';

  delimiter = '::';

  objectKeys = Object.keys;

  singleSelectValue = '';

  multiSelectValue = '';

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.multiSelectValue = this.setMultiSelectPlaceholder();
  }

  handleMultiSelectData = (eventData) => {
    if (eventData.detail.key) {
      eventData.preventDefault();
      const updateSelectState = [...this.multiSelectOption];
      const objIndex = updateSelectState.findIndex((obj) => obj.value === eventData.detail.key);
      updateSelectState[objIndex].isSelected = eventData.detail.status;
      this.multiSelectOption = [...updateSelectState];
      this.multiSelectValue = this.setMultiSelectPlaceholder();
      // console.log(updateSelectState[objIndex].isSelected);
      // console.log(this.multiSelectOption);
      // multiselectOptions.forEach((obj) => {
      //   if (obj.isSelected === true)
      //     this.selectOrDeSelectAllOptions(event)
      // });
    }
  };

  setMultiSelectPlaceholder = () => {
    const selecteddataObj = [];
    const delimiter = '::';
    this.multiSelectOption.forEach((element) => {
      if (element.isSelected) {
        selecteddataObj.push(element);
      }
    });
    const resStr = selecteddataObj.map((elem) => elem.label ? elem.label : elem.value).join(delimiter);

    return resStr ? resStr : this.multiSelectDefaultPlaceholder;
  };

  selectOrDeSelectAllOptions = (event) => {
    const updateSelectState = [...this.multiSelectOption];
    updateSelectState.forEach((obj) => obj.isSelected = event.target.checked);
    this.multiSelectOption = [...updateSelectState];
    this.multiSelectValue = this.setMultiSelectPlaceholder();
  };

  handleCloseEvent = (_event) => { };
}
