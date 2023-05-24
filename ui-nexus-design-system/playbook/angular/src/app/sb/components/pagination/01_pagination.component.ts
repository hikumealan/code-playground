import { Component, Input } from '@angular/core';
import { pagination } from '../../constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './01_pagination.component.html'
})
export default class PaginationComponent {
  @Input() current: number = pagination.current;

  @Input() max: number = pagination.max;

  handleChange(event) {
    this.current = event.detail;
  }
}
