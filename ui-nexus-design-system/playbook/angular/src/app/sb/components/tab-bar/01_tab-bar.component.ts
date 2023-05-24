import { Component } from '@angular/core';
import { tabOption } from '../../constants';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './01_tab-bar.component.html'
})
export default class TabBarComponent {
  tabOption = tabOption;

  ChangeActive(index: number) {
    tabOption.forEach((item) => {
      item.isActive = false;
    });
    tabOption[index].isActive = true;
  }
}
