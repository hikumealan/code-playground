import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  public options = [
    {
      slidesToShow: 1,
      overlapSize: 60
    },
    {
      breakpoint: 768,
      slidesToShow: 2,
      overlapSize: 60
    },
    {
      breakpoint: 1024,
      slidesToShow: 3,
      overlapSize: 60
    }
  ];
}
