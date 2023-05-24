import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-disabled',
  templateUrl: './02_disabled.component.html'
})
export default class SliderDisabledComponent {
  @Input() max: number = 100;

  @Input() min: number = 0;
}
