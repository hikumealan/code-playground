import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() bgColor: string = '';

  @Input() bgImage: string = './assets/images/card-header-image.png';

  @Input() clickable: boolean = false;

  @Input() height: string = '';
}
