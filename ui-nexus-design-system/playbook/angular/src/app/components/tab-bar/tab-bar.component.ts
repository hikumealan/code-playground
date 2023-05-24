import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent {
  tabOption = [
    {
      title: 'Option 1',
      value: 'Option 1 selected',
      isActive: true
    },
    {
      title: 'Option 2',
      value: 'Option 2 selected',
      isActive: false
    },
    {
      title: 'Option 3',
      value: 'Option 3 selected',
      isActive: false
    }
  ];

  ChangeActive(index: number) {
    this.tabOption.forEach((item) => {
      item.isActive = false;
    });
    this.tabOption[index].isActive = true;
  }
}
