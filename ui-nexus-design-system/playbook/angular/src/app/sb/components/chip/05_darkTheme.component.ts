import { Component } from '@angular/core';
import { chipDarkTheme } from '../../constants';

@Component({
  selector: 'app-chip-dark-theme',
  templateUrl: './05_darkTheme.component.html'
})
export default class ChipOnDarkThemeComponent {
  darkTheme = chipDarkTheme;
}
