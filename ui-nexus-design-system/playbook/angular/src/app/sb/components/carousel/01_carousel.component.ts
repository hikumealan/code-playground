import { Component } from '@angular/core';
import { carouselOptions } from '../../constants';

@Component({
  selector: 'app-carousel',
  templateUrl: './01_carousel.component.html'
})
export default class CarouselComponent {
  public options = carouselOptions;
}
