import { Component, Input } from '@angular/core';
import { DefaultToolTip } from '../../constants';

@Component({
  selector: 'app-tooltip',
  templateUrl: './01_tooltip.component.html'
})
export default class TooltipComponent {
  @Input() placement: string = DefaultToolTip.placement;

  @Input() allowClick: boolean = DefaultToolTip.allowClick;

  DefaultToolTip = DefaultToolTip;
}
