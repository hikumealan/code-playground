import { Component, Input } from '@angular/core';
import { DefaultCard } from '../../constants';

@Component({
  selector: 'app-card',
  templateUrl: './01_card.component.html'
})
export default class CardComponent {
  @Input() bgColor: string = '';

  @Input() bgImage: string = DefaultCard.profile;

  @Input() clickable: boolean = false;

  @Input() height: string = '';

  defaultCard = DefaultCard;
}
