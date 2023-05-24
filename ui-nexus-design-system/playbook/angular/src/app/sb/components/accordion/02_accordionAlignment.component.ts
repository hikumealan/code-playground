import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-alignment',
  templateUrl: './02_accordionAlignment.component.html'
})
export default class AccordionAlignmentComponent {
  @Input() open: boolean = false;

  @Input() openExample2 = false;

  @Input() openExample3 = false;
}
