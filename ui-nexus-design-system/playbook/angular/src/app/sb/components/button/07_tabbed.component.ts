import { Component } from '@angular/core';
import { tabbed } from '../../constants';

@Component({
  selector: 'app-button-tabbed',
  templateUrl: './07_tabbed.component.html',
  styles: [
    `.btn-success {
      background-color: ${tabbed.successColor};
      color: ${tabbed.textColor};
      border: 1px solid ${tabbed.successColor};
    }`
  ]
})
export default class TabbedButtonComponent {
  tabbedInfo = tabbed;
}
