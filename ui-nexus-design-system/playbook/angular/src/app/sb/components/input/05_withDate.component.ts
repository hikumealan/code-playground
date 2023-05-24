import { Component } from '@angular/core';
import { withDate } from '../../constants';
@Component({
  selector: 'app-input-examples-date',
  templateUrl: './05_withDate.component.html'
})
export default class InputDateComponent {
  text = withDate.text;

  min = withDate.min;

  max = withDate.max;

  placeholder = withDate.placeholder;
}
