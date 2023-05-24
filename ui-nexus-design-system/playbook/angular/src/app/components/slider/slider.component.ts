import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() max: number = 100;

  @Input() min: number = 0;

  @Input() disabled: boolean = false;
}
