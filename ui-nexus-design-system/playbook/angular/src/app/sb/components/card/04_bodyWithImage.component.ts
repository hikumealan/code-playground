import { Component } from '@angular/core';
import { BodyWithImage } from '../../constants';

@Component({
  selector: 'app-card-with-body-bg-image',
  templateUrl: './04_bodyWithImage.component.html'
})
export default class CardWithImageOnBodyComponent {
  bodyWithImage = BodyWithImage;
}
