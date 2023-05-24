import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './01_slider.component.html'
})
export default class SliderComponent {
  @Input() max: number = 100;

  @Input() min: number = 0;

  @Input() disabled: boolean = false;
}
