import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-examples',
  templateUrl: './modal-examples.component.html',
  styleUrls: ['./modal-examples.component.scss']
})
export class ModalExamplesComponent {
  modal1 = false;

  modal2 = false;

  fullscreen = false;

  size: string;
}
