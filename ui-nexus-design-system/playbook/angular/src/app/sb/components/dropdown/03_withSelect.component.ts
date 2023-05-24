import { Component } from '@angular/core';
import { withSelect } from '../../constants';
@Component({
  selector: 'app-dropdown-examples-select',
  templateUrl: './03_withSelect.component.html'
})
export default class WithSelectComponent {
  src = withSelect.src;

  text = withSelect.text;

  option1 = withSelect.option1;

  option2 = withSelect.option2;

  option3 = withSelect.option3;

  handleCloseEvent = (_event) => {};
}
