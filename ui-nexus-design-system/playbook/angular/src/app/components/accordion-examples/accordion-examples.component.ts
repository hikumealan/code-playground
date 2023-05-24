import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-examples',
  templateUrl: './accordion-examples.component.html',
  styleUrls: ['./accordion-examples.component.scss']
})
export class AccordionExamplesComponent {
  public open = false;

  public openExample2 = false;

  public openExample3 = false;

  public openExampleXS = false;

  public openExampleS = false;

  public openExampleM = false;

  public openExampleL = false;

  public openExampleXL = false;
}
