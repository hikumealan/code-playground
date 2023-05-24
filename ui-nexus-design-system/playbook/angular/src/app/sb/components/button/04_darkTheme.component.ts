import { Component } from '@angular/core';
import { darkTheme } from '../../constants';

@Component({
  selector: 'app-button-dark-theme',
  templateUrl: './04_darkTheme.component.html'
})
export default class DarkThemeComponent {
  darkTheme = darkTheme;
}
