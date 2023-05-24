import { Component, Input } from '@angular/core';
import { accordion } from '../../constants';

@Component({
  selector: 'app-accordion',
  templateUrl: './01_accordion.component.html'
})
export default class AccordionComponent {
  @Input() align: string = accordion.align;

  @Input() open: boolean = accordion.open;

  @Input() size: string = accordion.size;

  accordion = accordion;
}
