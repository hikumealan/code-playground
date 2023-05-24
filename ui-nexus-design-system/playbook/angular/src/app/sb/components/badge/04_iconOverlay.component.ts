import { Component } from '@angular/core';
import { iconOverlay } from '../../constants';

@Component({
  selector: 'app-icon-overlay',
  templateUrl: './04_iconOverlay.component.html',
  styleUrls: []
})
export default class IconOverlayComponent {
  iconInfo = iconOverlay;
}
