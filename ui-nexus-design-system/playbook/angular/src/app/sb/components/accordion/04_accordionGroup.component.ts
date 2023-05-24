import { Component } from '@angular/core';
import { accordionGroup } from '../../constants';


@Component({
  selector: 'app-accordion-group',
  templateUrl: './04_accordionGroup.component.html'
})
export default class AccordionGroupComponent {
  public open = false;

  public accordionGroupData = accordionGroup;

  checkForOpenDrawerStatus = (index: number) => {
    this.accordionGroupData.forEach((element) => element.isOpen = false);
    this.accordionGroupData[index].isOpen = !this.accordionGroupData[index].isOpen;
  };
}
