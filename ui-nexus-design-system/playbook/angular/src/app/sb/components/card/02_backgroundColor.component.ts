import { Component } from '@angular/core';
import { BackgroundColor } from '../../constants';

@Component({
  selector: 'app-card-with-bg-color',
  templateUrl: './02_backgroundColor.component.html'
})
export default class CardWithBackgroundColorComponent {
  backgroundColor = BackgroundColor;
}
