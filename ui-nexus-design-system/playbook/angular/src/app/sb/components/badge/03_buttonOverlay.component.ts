import { Component } from '@angular/core';
import { buttonOverlay } from '../../constants';

@Component({
  selector: 'app-button-overlay',
  templateUrl: './03_buttonOverlay.component.html',
  styleUrls: []
})
export default class ButtonOverlayComponent {
  text = buttonOverlay.text;

  label = buttonOverlay.label;
}
