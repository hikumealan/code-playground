import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './01_menu.component.html'
})
export default class MenuComponent {
  @Input() open: boolean = false;

  @Input() position: string = 'left';
}
