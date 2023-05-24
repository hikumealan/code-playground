import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-group-examples',
  templateUrl: './accordion-group-examples.component.html',
  styleUrls: ['./accordion-group-examples.component.scss']
})
export class AccordionGroupExamplesComponent {
  public open = false;

  public accordionGroupData: { title: string; info: string; isOpen: boolean }[] = [
    {
      title: 'Accordion Title 1',
      info: 'Lorem ipsum consectetur adipiscing dolor sit amet,  elit. Fusce eget aliquam justo, nec iaculis enim.',
      isOpen: false
    },
    {
      title: 'Accordion Title 2',
      info: 'Lorem ipsum dolor , consectetur sit amet adipiscing elit. Fusce eget aliquam justo, nec iaculis enim.',
      isOpen: false
    },
    {
      title: 'Accordion Title 3',
      info: 'Lorem ipsum dolor Fusce eget aliquam sit amet, consectetur adipiscing elit.  justo, nec iaculis enim.',
      isOpen: false
    },
    {
      title: 'Accordion Title 4',
      info: 'Lorem ipsum dolor sit amet, adipiscing elit consectetur . Fusce eget aliquam justo, nec iaculis enim.',
      isOpen: false
    }
  ];

  checkForOpenDrawerStatus = (index: number) => {
    this.accordionGroupData.forEach((element) => element.isOpen = false);
    this.accordionGroupData[index].isOpen = !this.accordionGroupData[index].isOpen;
  };
}
