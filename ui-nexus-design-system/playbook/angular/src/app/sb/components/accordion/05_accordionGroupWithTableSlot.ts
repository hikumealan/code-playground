import { Component } from '@angular/core';
import { AccordionGroupWithTableSlotData } from '../../constants';

@Component({
  selector: 'app-accordion-group-with-table-slot',
  templateUrl: './05_accordionGroupWithTableSlot.html'
})
export default class AccordionGroupWithTableSlotComponent {
  public open = false;

  public accordionGroupData = AccordionGroupWithTableSlotData;

  checkForOpenDrawerStatus = (index: number) => {
    this.accordionGroupData.forEach((element) => element.isOpen = false);
    this.accordionGroupData[index].isOpen = !this.accordionGroupData[index].isOpen;
  };
}
