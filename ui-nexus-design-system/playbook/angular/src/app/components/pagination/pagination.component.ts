import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() current: number = 2;

  @Input() max: number = 5;

  handleChange(event) {
    this.current = event.detail;
  }
}
