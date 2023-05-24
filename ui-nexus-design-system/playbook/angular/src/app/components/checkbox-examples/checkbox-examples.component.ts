import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-examples',
  templateUrl: './checkbox-examples.component.html',
  styleUrls: ['./checkbox-examples.component.scss']
})
export class CheckboxExamplesComponent {
  checkedValue = new FormControl(false);

  indeterminateValue = new FormControl(false);

  disabledValue = new FormControl(false);
}
