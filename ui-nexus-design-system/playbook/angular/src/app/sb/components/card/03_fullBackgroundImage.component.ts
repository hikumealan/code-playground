import { Component } from '@angular/core';
import { FullBackground } from '../../constants';

@Component({
  selector: 'app-card-with-bg-image',
  templateUrl: './03_fullBackgroundImage.component.html'
})
export default class CardWithFullBackgroundImageComponent {
  fullbackground = FullBackground;
}
