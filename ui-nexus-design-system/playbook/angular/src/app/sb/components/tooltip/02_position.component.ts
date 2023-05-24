import { Component } from '@angular/core';
import { TooltipPosition } from '../../constants';

@Component({
  selector: 'app-tooltip-position-variant',
  templateUrl: './02_position.component.html'
})
export default class TooltipPositionVariantComponent {
  TooltipPosition = TooltipPosition;
}
