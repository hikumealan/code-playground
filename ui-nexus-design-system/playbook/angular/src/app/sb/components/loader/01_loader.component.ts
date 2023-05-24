import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './01_loader.component.html'
})
export default class LoaderComponent {
  @Input() show: boolean = true;

  @Input() fullscreen: boolean = false;
}
