import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './01_breadcrumb.component.html'
})
export default class BreadcrumbComponent {
  @Input() separator: string = '/';
}
