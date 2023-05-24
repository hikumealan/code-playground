import { Component } from '@angular/core';
import { tabBarCustomContent } from '../../constants';

@Component({
  selector: 'app-tab-bar-custom-content',
  templateUrl: './02_withCustomContent.component.html'
})
export default class WithCustomContentComponent {
  tabOption = tabBarCustomContent;

  ChangeActive(index: number) {
    this.tabOption.forEach((item) => {
      item.isActive = false;
    });
    this.tabOption[index].isActive = true;
  }
}
