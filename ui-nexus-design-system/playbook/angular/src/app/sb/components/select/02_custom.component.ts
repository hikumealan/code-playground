import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { selectCustom } from '../../constants';

@Component({
  selector: 'app-custom',
  templateUrl: './02_custom.component.html'
})
export default class CustomComponent implements OnInit {
  selectOptions = selectCustom;

  delimiter = '::';

  objectKeys = Object.keys;

  singleSelectValue = '';

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.singleSelectValue = this.setSingleSelectPlaceholder();
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

  handleCloseEvent = (_event) => { };
}
