import { Component, Input } from '@angular/core';
import { cardInsideAccordion } from '../../constants';

@Component({
  selector: 'app-card-inside-accordion',
  templateUrl: './03_cardInsideAccordion.component.html'
})
export default class CardInsideAccordionComponent {
  @Input() open: boolean = false;

  data = cardInsideAccordion;
}
