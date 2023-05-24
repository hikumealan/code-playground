import { Component } from '@angular/core';
import { withIcon } from '../../constants';


@Component({
  selector: 'app-with-icon',
  templateUrl: './03_withIcon.component.html'
})
export default class WithIconComponent {
  withIcon = withIcon;
}
